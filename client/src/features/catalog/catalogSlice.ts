import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit"
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { ProductParams } from "../../app/models/ProductParams";
import { RootState } from "../../app/store/configureStore";

interface CatalogState{
    productsLoaded: boolean;
    status: string;
    productParams : ProductParams;

}
const productAdapter = createEntityAdapter<Product>();
function getAxiosParams (productParams: ProductParams){
    const params = new URLSearchParams();

    if(productParams.OrderBy) params.append('orderBy', productParams.OrderBy);
    if(productParams.SearchTerm) params.append('searchTerm', productParams.SearchTerm);
    if(productParams.Brand) params.append('brand', productParams.Brand.toString());
    if(productParams.Category) params.append('category', productParams.Category.toString())

    return params;
}

export const fetchProductsAsync = createAsyncThunk<Product[], void, {state: RootState}>(
    'catalog/fetchProductsAsync',
    async (_, thunkAPI) => {
        const params = getAxiosParams(thunkAPI.getState().catalog.productParams)
        try{
            return await agent.Catalog.list(params);
        }catch(error: any){
            return thunkAPI.rejectWithValue({error: error.data})
        }

    }
)
export const fetchProductAsync = createAsyncThunk<Product,number>(
    'catalog/fetchProductAsync',
    async (productId, thunkAPI) => {
        
        try{
            return await agent.Catalog.details(productId)
        }catch(error: any){
            return thunkAPI.rejectWithValue({error: error.data})
        }

    }
)

 function initParams(){
    return{
        OrderBy: 'name',
        SearchTerm: '',
        Category: [],
        Brand: []
     }
 }
export const catalogSlice = createSlice({
    name:'catalog',
    initialState: productAdapter.getInitialState<CatalogState>({
        productsLoaded: false, 
        status: 'idle',
        productParams: initParams(),
    }),
    reducers: {},
    extraReducers:(builder => {
        builder.addCase(fetchProductsAsync.pending, (state)=>{
            state.status = 'pendingFetchProducts';
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) =>{
            productAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.productsLoaded = true;
            
        });
        builder.addCase(fetchProductsAsync.rejected, (state, action)=>{
            console.log(action.payload);
            state.status ='idle'
        });
        builder.addCase(fetchProductAsync.pending, (state)=> {
            state.status = 'pendingFetchProduct';
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productAdapter.upsertOne(state, action.payload);
            console.log(action.payload);
            state.status ='idle';
            
        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            console.log(action);
            state.status = 'idle';
        })
    })
})

export const productSelectors = productAdapter.getSelectors((state: RootState)=> state.catalog);


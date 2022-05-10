import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit"
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { ProductParams } from "../../app/models/ProductParams";
import { RootState } from "../../app/store/configureStore";

interface CatalogState{
    productsLoaded: boolean;
    status: string;
    productParams : ProductParams;
    productList : Product[]

}
const productAdapter = createEntityAdapter<Product>();

function getAxiosParams (productParams: ProductParams){
    const params = new URLSearchParams();

    if(productParams.OrderBy) params.append('orderBy', productParams.OrderBy);
    if(productParams.SearchTerm) params.append('searchTerm', productParams.SearchTerm);
    if(productParams.Brand) params.append('brand', productParams.Brand.toString());
    if(productParams.Category) params.append('category', productParams.Category.toString());
    if(productParams.Skip) params.append('skip', productParams.Skip.toString());
    if(productParams.Take) params.append('take', productParams.Take.toString());

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
        Brand: [],
        Skip: 0,
        Take: 4
     }
 }
export const catalogSlice = createSlice({
    name:'catalog',
    initialState: productAdapter.getInitialState<CatalogState>({
        productsLoaded: false, 
        status: 'idle',
        productParams: initParams(),
        productList: []
    }),
    reducers: {
        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload};
        },
        setProduct: (state, action) => {
            productAdapter.addMany(state, action.payload);
            state.productsLoaded = false;
            state.productList ={...state.productList, ...action.payload};
        },
        resetProductParams: (state) => {
            state.productParams = initParams();
        }
    },
    extraReducers:(builder => {
        builder.addCase(fetchProductsAsync.pending, (state)=>{
            state.status = 'pendingFetchProducts';
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) =>{
            productAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.productsLoaded = true;
            productAdapter.addMany(state, action.payload);
            state.productList = {...state.productList, ...action.payload}
            
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

export const {setProductParams, setProduct, resetProductParams} = catalogSlice.actions;
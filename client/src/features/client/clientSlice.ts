import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";
import { Client } from "../../app/models/client";

interface ClientState{
    client : Client |null;
    
}

const initialState: ClientState = {
    client: null,
   
}

export const signInClient = createAsyncThunk<Client, FieldValues>(
    'client/signInClient',
    async(data, thunkAPI) =>{
        try{
            const client = await agent.Client.login(data);
            localStorage.setItem('client', JSON.stringify(client));
            return client;
        }catch(error: any){
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
)

//TODO develop fetchCurrentClient

export const fetchCurrentClient = createAsyncThunk<Client>(
    'client/fetchCurrentClient',
    async(_, thunkAPI)=>{
        thunkAPI.dispatch(setClient(JSON.parse(localStorage.getItem('client')!)));
        try{
            const client = await agent.Client.currentClient();
            localStorage.setItem('client', JSON.stringify(client));
            return client;
        }catch(error:any){
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)


export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers:{
        signOut: (state) =>{
            state.client =null;
            localStorage.removeItem('client')
            Navigate({to:"/"})
        },
        setClient: (state, action)=>{
            state.client = action.payload;
        }
    },
    extraReducers:(builder =>{
        builder.addCase(fetchCurrentClient.rejected, (state)=>{
            state.client = null;
            localStorage.removeItem('client');
            const navigate = useNavigate();
            navigate("/");
        });
        builder.addMatcher(isAnyOf(signInClient.fulfilled, fetchCurrentClient.fulfilled), (state,action)=>{
            state.client = action.payload;
        });
        builder.addMatcher(isAnyOf(signInClient.rejected), (state, action)=>{
            throw action.payload;
        })

        
    }) //TODO develop with fetchCurrentUser
})


export const{signOut, setClient} = clientSlice.actions;
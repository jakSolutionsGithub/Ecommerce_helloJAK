import { catalogSlice } from "../../features/catalog/catalogSlice";
import {configureStore} from "@reduxjs/toolkit"
import{TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { clientSlice } from "../../features/client/clientSlice";

export const store = configureStore({
    reducer: {
        catalog: catalogSlice.reducer,
        client: clientSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
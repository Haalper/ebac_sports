import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

// Configure the store with reducers and middleware
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Correct usage of getDefaultMiddleware
})

// Define the RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>

// No need to import or use buildGetDefaultMiddleware from '@reduxjs/toolkit/dist/getDefaultMiddleware'

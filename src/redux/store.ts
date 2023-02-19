import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CartReducer } from './cart/cart.reducer'
import { ProductReducer } from './product/product.reducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'



const rootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
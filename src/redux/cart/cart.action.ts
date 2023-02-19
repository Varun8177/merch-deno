import { AppDispatch } from '../store'
import { addItemToCartAPI, getCartAPI } from './cart.api'
import *as types from './cart.types'

export const getCart = (): any => async (dispatch: AppDispatch) => {
    dispatch({ type: types.CART_LOADING })
    try {
        let data = await getCartAPI()
        dispatch({ type: types.GET_CART, payload: data })
    } catch (error) {
        dispatch({ type: types.CART_ERROR })
    }
}

export const AddItemToCart: any = (productId: number, quantity: number) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.CART_LOADING })
    try {
        let data = await addItemToCartAPI(productId, quantity)
        dispatch({ type: types.ADD_TO_CART, payload: data })
    } catch (error) {
        dispatch({ type: types.CART_ERROR })
    }
}
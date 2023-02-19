import { AppDispatch } from '../store'
import { getProductsAPI } from './product.api'
import *as types from './product.types'


export const getProduct = (): any => async (dispatch: AppDispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const data = await getProductsAPI()
        dispatch({ type: types.GET_PRODUCT, payload: data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}
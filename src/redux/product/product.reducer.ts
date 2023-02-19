import { Product } from "@/utils/types"
import *as types from './product.types'

interface IinitialState {
    isloading: boolean,
    isError: boolean,
    products: Product[]
}

interface IproductAction {
    type: string
    payload?: any
}

const initialState: IinitialState = {
    isloading: false,
    isError: false,
    products: []
}

export const ProductReducer = (state: IinitialState = initialState, { type, payload }: IproductAction) => {
    switch (type) {
        case types.LOADING:
            return { ...state, isloading: true }
        case types.GET_PRODUCT:
            return { ...state, isloading: false, products: payload }
        case types.ERROR:
            return { ...state, isloading: false, isError: true }
        default:
            return state
    }
}

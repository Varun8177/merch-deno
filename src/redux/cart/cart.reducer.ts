import { Cart } from "@/utils/types"
import *as types from './cart.types'

interface IinitialCartState {
    isloading: boolean
    isError: boolean
    cartProducts: Cart[]
}
interface IcartAction {
    type: string,
    payload: any
}
const initialCartState: IinitialCartState = {
    isloading: false,
    isError: false,
    cartProducts: []
}

export const CartReducer = (state: IinitialCartState = initialCartState, { type, payload }: IcartAction) => {
    switch (type) {
        case types.CART_LOADING:
            return { ...state, isloading: true }
        case types.CART_ERROR:
            return { ...state, isError: true, isloading: false }
        case types.GET_CART:
            return {
                ...state,
                isloading: false,
                cartProducts: payload
            }
        case types.ADD_TO_CART:
            return {
                ...state,
                isloading: false,
                cartProducts: [...state.cartProducts, payload]
            }
        default:
            return state
    }
}

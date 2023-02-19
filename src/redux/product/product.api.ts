import { Product } from "@/utils/types"
import axios, { AxiosResponse } from "axios"

export const getProductsAPI = async () => {
    let response: AxiosResponse<Product[]> = await axios.get('https://easy-pear-parrot-toga.cyclic.app/products')
    return response.data
}

export const getSingleProductAPI = async (id: string) => {
    let response: AxiosResponse<Product> = await axios.get(`https://easy-pear-parrot-toga.cyclic.app/products/${id}`)
    return response.data
}
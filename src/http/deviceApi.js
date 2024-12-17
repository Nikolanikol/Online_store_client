import {$authHost, $host} from './index'
import { jwtDecode } from "jwt-decode";


export const createType = async(type) =>{
    const {data} = await $authHost.post('api/type', type)
    console.log(data)
    return data
}

export const fetchTypes = async() =>{
    const {data} = await $host.get('api/type')   
    console.log(data)

    return data
}

export const createBrand = async(brand) =>{
    const {data} = await $authHost.post('api/brand', brand)
    console.log(data)

    return data
}
export const fetchBrand = async() =>{
    const {data} = await $host.get('api/brand')   
    console.log(data)

    return data
}





export const createDevice = async(type) =>{
    const {data} = await $authHost.post('api/device', type)
    return data
}

export const fetchDevice = async(typeId, brandId, page, limit = 3) =>{
    const {data} = await $host.get('api/device', {
        params : {
            typeId, brandId, limit, page
        }
    })   
    return data
}

export const fetchDeviceById = async(id) =>{
    const {data} = await $host.get('api/device' + '/' + id)   
    return data
}

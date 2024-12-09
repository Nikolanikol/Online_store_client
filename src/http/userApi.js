import {$authHost, $host} from './index'
import { jwtDecode } from "jwt-decode";


export const registration = async(email, password) =>{
    const {data} = await $host.post('api/user/registration', {
        email, password, role: 'ADMIN'
    })
    localStorage.setItem('token', data.token)
    console.log(data)
    return jwtDecode(data.jwt)
}

export const login = async(email, password) =>{

    const {data} = await $host.post('api/user/login', {
        email, password
    })   
     console.log(data.token)

    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async() =>{
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.getItem('token')
        return jwtDecode(data.token)
    } catch (error) {
        
    }

   
}
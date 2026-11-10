import {create } from 'axios'

export const api = create({
    baseURL: 'http://10.10.86.194:3000',
    headers:{
        "Content-Type": "application/json"
    }
})


api.interceptors.request.use((request)=>{
    console.log('INTERCEPTOR')
    console.log('URL',request.url)
    console.log('BODY',request.data)
    
    return request;
})
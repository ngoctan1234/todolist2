import { useEffect, useState } from "react"
import axios from 'axios';



let list=[
    {
        id:1,
        name:"name 1"
    },
    {
        id:2,
        name:"name 2"
    },
    {
        id:3,
        name:"name 3"
    }
]
export const getInvoices= async ()=>{
    const url=`https://64563f712e41ccf16917a0c1.mockapi.io/list`
     axios.get(url).then(res=>{
        console.log(res.data)
        return res.data
    }).catch((error)=>{
                if(error.response.status=='404'){
                    return null
                }
    })
}
export function getInvoiceById(id){
    const data=[]
    const url=`https://64563f712e41ccf16917a0c1.mockapi.io/list`
    axios.get(url).then(res=>{
        data= res.data
    }).catch((error)=>{
                if(error.response.status=='404'){
                    return null
                }
    })
    return data.find(
        (item)=>item.id===id
    )
}
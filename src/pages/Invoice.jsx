import { useParams } from "react-router-dom"
import { getInvoiceById } from "./data"
import { useState,useEffect } from "react"
import axios from "axios"
export default function Invoice(){
   
    // const item=getInvoiceById(parseInt(param.id))
    const [data,setData]=useState(null)
    const param=useParams()
   
    const getData=async()=>{
        
        const url=`https://64563f712e41ccf16917a0c1.mockapi.io/list/${parseInt(param.id)}`
         axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=>{
                    if(error.response.status=='404'){
                       
                    }
        })
    }
    useEffect(()=>{
        getData()
    },[param])
    
    return (
        <div className="product">

        </div>
    )
}

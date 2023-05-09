import { Link, Outlet } from "react-router-dom"
import { getInvoices } from "./data"
import { useEffect, useState } from "react"
import axios from 'axios';
export default function Invoices(){
    let list=[];
   
    const [data,setData]=useState(null)
    const getData=async()=>{
        const url=`https://64563f712e41ccf16917a0c1.mockapi.io/list`
         axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=>{
                    if(error.response.status=='404'){
                       
                    }
        })
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
    return(
        <div>
            <nav>
                {
                   data&& data.map((item,index)=>
                    (
                         <Link key={index}
                        to={`/invoice/${item.id}`}
                        >
                        {item.name}
                        </Link>
                    )
                    )
                }
            </nav>
            <Outlet />
        </div>
    )
}
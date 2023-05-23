import { Link, Outlet } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { AppContext } from "../../AppContext";
export default function Products(){
    let list=[];
    let {addCart,data}=useContext(AppContext)
    // const [data,setData]=useState(null)
    // const getData=async()=>{
    //     const url=`https://64563f712e41ccf16917a0c1.mockapi.io/list`
    //      axios.get(url).then(res=>{
    //         setData(res.data)
    //     }).catch((error)=>{
    //                 if(error.response.status=='404'){
                       
    //                 }
    //     })
    // }
    // useEffect(()=>{
    //     getData()
    // },[])
    // console.log(data)

    return(
        <div>
           
                {
                   data&& data.map((item,index)=>
                    (
                         <div key={index} className="product">
                        {item.productname},{item.id}
                        <button onClick={()=>addCart(item.id)}>Buy Now</button>
                        </div>
                    )
                    )
                }
            
           
        </div>
    )
}
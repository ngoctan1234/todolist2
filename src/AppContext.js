import { createContext, useState,useEffect } from "react";
import axios from 'axios';
export const AppContext=createContext({})
export const AppProvider=({children})=>{
    const [show, setShow]=useState(true)
    const [cart,setCart]=useState([])
    const [data,setData]=useState(null)
    const [detail,setDetail]=useState(null)
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
    const addCart=async(id)=>{
       let kq=cart.find((item)=>item.id===id)
       
        const index= cart.findIndex((item)=>item.id===id)
        
        if(index>=0){
            console.log(kq)
         setCart([...cart,{...kq,qty:qty+1}])
        }
        else{
           
         setCart([...cart,{...kq,qty:1}])
        }
       
     
       

        
    }
    console.log(cart)
    return <AppContext.Provider value={{show,addCart,cart,data}}>
        {children}
    </AppContext.Provider>
}
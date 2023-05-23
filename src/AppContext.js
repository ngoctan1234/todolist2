import { createContext, useState,useEffect } from "react";
import axios from 'axios';
export const AppContext=createContext({})
export const AppProvider=({children})=>{
    const [show, setShow]=useState(true)
    const [cart,setCart]=useState([])
    const [data,setData]=useState(null)
    const [detail,setDetail]=useState(null)
    const getData=async()=>{
        const url=`https://6468b20360c8cb9a2caf9ddc.mockapi.io/products`
         axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=>{
                    if(error.response.status=='404'){
                       
                    }
        })
    }
    useEffect(() => {
        if(localStorage.getItem('cart_list')){
            setCart(JSON.parse(localStorage.getItem('cart_list')));
        }
        
      }, []);
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
     
    },[cart])
    const addCart=async(id)=>{
       let kq=data.find((item)=>item.id==id)
        const index= cart.findIndex((item)=>item.id==id)
        if(index>=0){
          let newList=cart;
          newList[index]["qty"]++
         setCart(newList)
         localStorage.setItem ('cart_list', JSON.stringify(newList));
        }
        else{
         setCart([...cart,{...kq,qty:1}])
         localStorage.setItem ('cart_list', JSON.stringify([...cart,{...kq,qty:1}]));
        }
        
    }
    console.log(cart)
    const changeQty=(id,num)=>{
        const kq=cart.map((item)=>(item.id==id&& !(num==-1&& item["qty"]==1))?{...item,qty:item["qty"]+num}:item)
         setCart(kq)
         localStorage.setItem ('cart_list', JSON.stringify(kq));
    }
    const removeItem=(id)=>{
        const kq=cart.filter(item=>item.id != id)
        setCart(kq)
        localStorage.setItem ('cart_list', JSON.stringify(kq));
    }
    return <AppContext.Provider value={{show,addCart,cart,data,changeQty,removeItem}}>
        {children}
    </AppContext.Provider>
}
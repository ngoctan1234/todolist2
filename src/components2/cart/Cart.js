import { useContext, useEffect } from "react"
import { AppContext } from "../../AppContext"
export default function Cart(){
    const {cart,changeQty,removeItem}=useContext(AppContext)
    console.log(cart)
    useEffect(()=>{
        
    },[])
    return(
        <div className="carts">
            <h1>Carts</h1>
               {
                   cart&& cart.map((item,index)=>
                   {
                    return (
                           
                        <div key={index} >
                       {item.productname}
                       -- quantity: {item.qty}
                       <button onClick={()=>changeQty(item.id,-1)} className="btn">-</button>
                       <button onClick={()=>changeQty(item.id,1)} className="btn">+</button>
                       <button onClick={()=>removeItem(item.id)} className="btn">X</button>
                       </div>
                       )
                   
                   })
                }
        </div>
    )
}
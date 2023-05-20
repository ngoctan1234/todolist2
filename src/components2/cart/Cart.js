import { useContext } from "react"
import { AppContext } from "../../AppContext"
export default function Cart(){
    const {cart}=useContext(AppContext)
    console.log(cart)
    return(
        <div className="carts">
            <h1>Carts</h1>
        {
                   cart&& cart.map((item,index)=>
                    (
                         <div key={index} >
                        {item.name}
                        
                        </div>
                    )
                    )
                }
        </div>
    )
}

import StudentList from "./components/StudentList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  './style.css'
import Weather from "./components2/Weather"
import { Routes,Route,Link } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Prices from "./pages/Prices"
import NotFound from "./pages/NotFound"
import Invoice from "./pages/Invoice"
import Invoices from "./pages/Invoices"
export default function App(){

    return (

        <div>
            {/* <StudentList /> */}
             {/* <Weather /> */}
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/prices">Prices</Link>
                </li>
                <li>
                    <Link to="/invoice">List invoice</Link>
                </li>
             </ul>
             <Routes>
             <Route index element={<Home/>} />
                {/* <Route path="/" element={<Home/>} /> */}
                <Route path="/products" element={<Products/>} />
                <Route path="/prices" element={<Prices/>} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/invoice" element={<Invoices/>} >
                     <Route path=":id" element={<Invoice/>} >
                       
                     </Route>
                </Route>
             </Routes>
        </div>
    )
}
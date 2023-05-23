
import Header from "./components2/header/Header"
import { Routes,Route,Link } from "react-router-dom"
import Home from "./pages1/home/Home"
import MovieList from "./components2/movieList/MovieList"
import MovieDetail from "./pages1/movieDetail/MovieDetail"
import Invoices from "./pages/Invoices"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './AppContext'
import Products from "./pages1/products/Products"
import './App.css'
import Cart from "./components2/cart/Cart"

export default function App1(){
     const arr=[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"}]
     let kq=arr.findIndex((item)=>item.id=="4")
     console.log("kq: "+kq)
    return (

        <div className="App">
            <AppProvider>
            <Header />
             
             <Routes>
             <Route index element={<Products/>} />
             <Route path="/*" element={<h1>Error Page</h1>}></Route>
             <Route path="movies/:type" element={<MovieList />}></Route>
             <Route path="movie/:id" element={<MovieDetail />}></Route>
             <Route path="cart" element={<Cart />}></Route>
             </Routes>
             </AppProvider>
            
        </div>
    )
}
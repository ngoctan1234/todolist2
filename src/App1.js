
import Header from "./components2/header/Header"
import { Routes,Route,Link } from "react-router-dom"
import Home from "./pages1/home/Home"
import MovieList from "./components2/movieList/MovieList"
import MovieDetail from "./pages1/movieDetail/MovieDetail"
export default function App1(){

    return (

        <div className="App">
             <Header />
             <Routes>
             <Route index element={<Home/>} />
             <Route path="/*" element={<h1>Error Page</h1>}></Route>
             <Route path="movies/:type" element={<MovieList />}></Route>
             <Route path="movie/:id" element={<MovieDetail />}></Route>
             </Routes>
        </div>
    )
}
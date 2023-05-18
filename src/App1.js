
import Header from "./components2/header/Header"
import { Routes,Route,Link } from "react-router-dom"
import Home from "./pages1/home/Home"
import MovieList from "./components2/movieList/MovieList"
import MovieDetail from "./pages1/movieDetail/MovieDetail"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './AppContext'
export default function App1(){

    return (

        <div className="App">
            <AppProvider>
            <Header />
             
             <Routes>
             <Route index element={<Home/>} />
             <Route path="/*" element={<h1>Error Page</h1>}></Route>
             <Route path="movies/:type" element={<MovieList />}></Route>
             <Route path="movie/:id" element={<MovieDetail />}></Route>
             </Routes>
             </AppProvider>
            
        </div>
    )
}
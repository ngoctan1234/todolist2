
import "./Header.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContext"
const Header = () => {
    const {show,cart}=useContext(AppContext)
    
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/cart" style={{textDecoration: "none"}}><span>Cart ({cart.length})</span></Link>
            </div>
        </div>
    )
}

export default Header
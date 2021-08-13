import React from 'react'
import Close from './svg/times-solid.svg'
import Open from './svg/bars-solid.svg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header >
            <div className="logo">
                <h1><Link to="/products">Citizen</Link></h1>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Login/Register</Link></li>
                <li><img className="menu" src={Close} alt="/" width={30} /></li>
            </ul>
            <div className="menu">
                <img src={Open} alt="/" width={30} />
            </div>
        </header>
    )
}

export default Header

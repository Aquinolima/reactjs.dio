import React from 'react'
import './styled.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        
        <header>
            <div id='title'>Github Previwer v1.0 </div>
            <div  id='search'>
            <input
                type="search"
                placeholder="Search User"

                id="find"
            />
            <button  type="submit">Buscar</button>
            </div>

        </header>
    )
}

export default Header

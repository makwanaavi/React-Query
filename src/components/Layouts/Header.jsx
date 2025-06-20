import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <div>
                    <NavLink to="/">Avi Makwana</NavLink>
                    <ul>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>FetchOld</NavLink></li>
                        <li><NavLink>FetchQR</NavLink></li>

                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
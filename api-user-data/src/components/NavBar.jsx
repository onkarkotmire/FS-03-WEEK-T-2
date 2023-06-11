import './NavBar.css'
import React from 'react'

export default function NavBar() {
    return (
        <div className='navbox'>
            <div>
                <h1>Geekster</h1>
            </div>
            <div className='navoption'>
                <a href="#" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>HOME</a>
                <a href="#" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>ABOUT</a>
                <a href="#" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>MENU</a>
                <a href="#" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>ORDER</a>
                <a href="#" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>CONTACT</a>
            </div>
        </div>
    )
}

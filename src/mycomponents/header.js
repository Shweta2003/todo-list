import React from 'react'
import logo from './todo-logo.png'
import { Link } from 'react-router-dom'

export default function Header(prop) {
    return (
        <nav>
            <ul>
                <li className='li'>
                    <img src={logo} alt="logo" className="logo"/>
                </li>
                <li className='li'>
                    <h1>{prop.title}</h1>
                </li>
                <div className='change'>
                    <li>
                        <Link to="/todo" className='ch'>Todo-list</Link>
                    </li> 
                    <li>
                        <Link to="/" className='ch'>Main Info</Link>
                    </li> 
                </div>
            </ul>
        </nav>
    );
}

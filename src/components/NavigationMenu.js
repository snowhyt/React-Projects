import React from 'react'
import {Link} from 'react-router-dom'


function NavigationMenu(props) {


    return (
        <div>
            <ul>
                <li>
                    <Link to="/"
                        className='text-blue-500'
                        onClick={props.closeMenu}
                    >Home
                    </Link>
                </li>
                <li>
                    <Link to="/about"
                     className='text-blue-500'
                     onClick = {props.closeMenu}
                     >About</Link>
                </li>
                <li>
                    <Link to="/contact-us"
                    className='text-blue-500'
                    onClick = {props.closeMenu}
                    >Contact
                    </Link>
                </li>
                <li>
                    <Link to="/products/"
                    className='text-blue-500'
                    onClick = {props.closeMenu}
                    >Product
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
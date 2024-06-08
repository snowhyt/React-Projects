import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/web'
import NavigationMenu from './NavigationMenu';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    // let menu
    // let menuMask

    // if(showMenu){
    //     menu=
    //     <div className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'>
    //          the menu
    //     </div>

    //    menuMask =
    //     <div 
    //     className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
    //         onClick={() => setShowMenu(false)}
    //     >
    //     </div>
    // }

    const transitions = useTransition(showMenu, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })




    return (
        <nav>
            <span className='text-xl'>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}

                />
            </span>

            {
                transitions((props, item, key) => (
                    item &&
                    <animated.div
                        style={props}
                        key={key}
                        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                        This is the menu
                    </animated.div>
                ))
            }


            {
                transitions((props, item, key) => (
                    item &&
                    <animated.div
                        style={props}
                        key={key}
                        className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'

                    >
                        
                        <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                       
                    </animated.div>
                ))
            }







        </nav>
    )
}

export default Navigation;
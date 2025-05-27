import { useState, useEffect } from 'react';
import '../css/Nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="nav-container">
            <nav className="p-2">
                <div className="flex items-center justify-between">
                    <div className="text-white text-4xl font-bold pl-2">
                        <a href="" className='logo'>NX Creations</a>
                    </div>

                    <div className="md:hidden">
                        <button id="menu-toggle" className='text-white' onClick={handleMenuToggle}>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                                className='w-10 h-10'
                            >
                                <path d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-10 pr-8 menu">
                        <li><a href="" className='text-white font-bold'>Home</a></li>
                        <li><a href="" className='text-white font-bold'>Performance</a></li>
                        <li><a href="" className='text-white font-bold'>Experience</a></li>
                        <li><a href="" className='text-white font-bold'>Contact</a></li>
                        <li><a href="" className='text-white font-bold'>About</a></li>
                    </ul>
                </div>

                {menuOpen && (
                    <ul className="flex-col md:hidden">
                        <li className='py-1 ml-2'><a href="" className='text-white font-bold'>Home</a></li>
                        <li className='py-1 ml-2'><a href="" className='text-white font-bold'>Performance</a></li>
                        <li className='py-1 ml-2'><a href="" className='text-white font-bold'>Experience</a></li>
                        <li className='py-1 ml-2'><a href="" className='text-white font-bold'>Contact</a></li>
                        <li className='py-1 ml-2'><a href="" className='text-white font-bold'>About</a></li>
                    </ul>
                )}
            </nav>

            <div className="intro-data">
                <div className="item-left"></div>
                <div className={`item-right ${visible ? 'visible' : ''}`}>
                    <p className="font-bold text-white">Welcome to <span>NX Creations</span></p>
                    <p className='text-white font-bold'>Hello, <span>I am</span></p>
                    <p className='text-white font-bold'>Nengxiong</p>
                    <p className='text-white font-bold'>WANGTOUAXIONG</p>
                    <p className='text-white'>I am interested in Frontend Web Developer with ReactJS</p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Nav;
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header =() =>{
    const [isOpen, setMenuOpen]=useState(false);
    const toggleMenu = () => {setMenuOpen(!isOpen);};

    return(
        <header>
            <nav className='navbar'>
            <h2 style={{color:"white"}}>Vivekanand College</h2>
                <div className={`nav-links ${isOpen ? 'open':''}`}>
                    <ul>
                    <Link className='f'to='/'>Home</Link>
                    <Link className='f'to='/aboutpage'>About</Link>
                    <Link className='f'to='/coursespage'>Course</Link>
                    <Link className='f'to='/contactpage'>Contact</Link>
                    <Link to='/admissionspage'></Link>
                    </ul>
                </div>
                   <div className='humburger'onClick={toggleMenu}>&#9776;</div>
                    <Link className='f'to='/admissionspage'><button className='apply-btn'><u>Apply Now!</u></button></Link>
            </nav>    
         </header>
    );
};

export default Header;

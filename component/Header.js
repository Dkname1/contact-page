import React from 'react';
import './Header.css';
import {FaShoppingCart} from 'react-icons/fa';



const Header = () => {
              return (
                <div className="header">
                   <h1>Logo</h1>

                   <ul className='nav_menu'>
                     <li>Catogeries</li>
                     <li className='search'><input type='search' placeholder='search'/> </li>
                     <li>Home</li>
                     <li>Courses</li>
                     <li>Colleges</li>
                     <li>Contact Us</li>
                     <li><FaShoppingCart size={40} style={{color:'#000000',marginRight: "2rem"}} /></li>
                     <li><button className='btn1'>login</button></li>
                     <li><button className='btn2'>sign Up</button></li>
                  </ul>
                </div>
              );
};

export default Header;
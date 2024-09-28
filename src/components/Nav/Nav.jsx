import React from 'react';
import style from './Nav.module.css';

const Nav = ({ cartItemsCount }) => {
     return (
          <nav>
               <ul className={style.nav_ul}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop</a></li>
               </ul>
               <button className={style.cart_button}>
                    <ion-icon name="cart"></ion-icon> Cart <span>{cartItemsCount}</span>
               </button>
          </nav>
     );
};

export default Nav;

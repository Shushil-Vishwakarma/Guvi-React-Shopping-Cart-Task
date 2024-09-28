import React from 'react';
import style from './Cards.module.css';

const Cards = ({ cartItems, addToCart, removeFromCart }) => {
     const products = [
          { id: 1, name: 'Fancy Product', image: 'https://via.placeholder.com/200/200', cost: '$40.00' },
          { id: 2, name: 'Special Item', image: 'https://via.placeholder.com/200/200', cost: '$25.00' },
          { id: 3, name: 'Sale Item', image: 'https://via.placeholder.com/200/200', cost: '$15.00' },
          { id: 4, name: 'Popular Item', image: 'https://via.placeholder.com/200/200', cost: '$30.00' },
          { id: 5, name: 'New Item', image: 'https://via.placeholder.com/200/200', cost: '$20.00' },
          { id: 6, name: 'Discount Item', image: 'https://via.placeholder.com/200/200', cost: '$10.00' },
          { id: 7, name: 'Limited Time Item', image: 'https://via.placeholder.com/200/200', cost: '$50.00' },
          { id: 8, name: 'Best Seller', image: 'https://via.placeholder.com/200/200', cost: '$35.00' },
     ];

     return (
          <div className={style.main_card_div}>
               <div className={style.card_container}>
                    {products.map(product => {
                         const isInCart = cartItems.some(item => item.id === product.id);
                         return (
                              <div key={product.id} className={style.card}>
                                   <img src={product.image} alt={`Placeholder for ${product.name}`} className={style.card_image} />
                                   <h2>{product.name}</h2>
                                   <p>{product.cost}</p>
                                   <button
                                        className={style.cart_button}
                                        onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
                                   >
                                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                                   </button>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}

export default Cards;

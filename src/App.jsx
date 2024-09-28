import './App.css'
import BottomHeader from './components/BottomHeader/BottomHeader'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Nav cartItemsCount={cartItems.length} />
      <BottomHeader />
      <Cards
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

export default App;

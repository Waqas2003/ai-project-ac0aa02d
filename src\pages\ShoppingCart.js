import React, { useState } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('https://api.example.com/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUpdateCart = (productId, quantity) => {
    axios.patch(`https://api.example.com/cart/${productId}`, { quantity })
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRemoveFromCart = (productId) => {
    axios.delete(`https://api.example.com/cart/${productId}`)
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            <span>{cart[productId].name}</span>
            <span>Quantity: {cart[productId].quantity}</span>
            <button onClick={() => handleUpdateCart(productId, cart[productId].quantity + 1)}>+</button>
            <button onClick={() => handleUpdateCart(productId, cart[productId].quantity - 1)}>-</button>
            <button onClick={() => handleRemoveFromCart(productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
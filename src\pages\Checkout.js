import React from 'react';
import axios from 'axios';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    axios.post('https://api.example.com/checkout', { paymentMethod })
      .then(response => {
        setPaymentStatus(response.data.status);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button onClick={handlePayment}>Pay</button>
      </form>
      <p>Payment Status: {paymentStatus}</p>
    </div>
  );
};

export default Checkout;
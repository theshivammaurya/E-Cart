import React,{ useState, useEffect } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, setCart, updateItems }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);

    // Remove item from index page as well
    updateItems(id);

    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
           
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Pay</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;

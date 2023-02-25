import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import list from './data';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };


  //after deleting from cart, the updated index page 
  const updateItems = (id) => {
    const arr = list.filter((item) => item.id !== id);
    list.length = 0;
    list.push(...arr);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} updateItems={updateItems} />
      )}
      {warning && <div className="warning">Item is already added to your cart</div>}
    </React.Fragment>
  );
};

export default App;

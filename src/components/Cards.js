import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick, setList }) => {
  const { title, price, img} = item;


  
  const handleBuy = () => {
    handleClick(item);
    setList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, added: true } : prevItem
      )
    );
  };

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p className="pricetage" style={{ fontWeight: "bold" }}>
          Price - {price}Rs
        </p>

          <button onClick={handleBuy}>Buy</button>     
      </div>
    </div>
  );
};


export default Cards;
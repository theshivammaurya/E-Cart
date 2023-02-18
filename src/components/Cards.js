import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p className='pricetage' style={{fontWeight:"bold"}}>Price - {price}Rs</p>
            <button  onClick={()=>handleClick(item)} >Buy</button>
        </div>
    </div>
  )
}

export default Cards
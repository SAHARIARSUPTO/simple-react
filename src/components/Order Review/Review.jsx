import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Review = ({product,handleRemoveFromCart}) => {
    const {id,img,price,name,quantity} = product;
    return (
       <div className='parent'>
       <div className='review-parent'>
            <div>
            <img src={img}></img></div>
            <div>
            <p>{name}</p>
            <p>Price: <span className='orange-text'>{price} Tk</span></p>
            <p>Quantity: <span className='orange-text'>{quantity}</span></p></div>
            
            <div className='icon-bg'>
            <FontAwesomeIcon onClick={()=> handleRemoveFromCart(id)} className='icon' icon={faTrash } />
            </div>

        </div></div>
    );
};

export default Review;
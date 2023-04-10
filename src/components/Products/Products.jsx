import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {img,price,name,seller,quantity}=props.product;
    const handleAddtoCart = props.handleAddtoCart;

    return (
        <div className='product'>
            <img src={img} />
            <h4>{name}</h4>
            <h3>Price: {price} Tk</h3>
            <h3>Brand: {seller}</h3>
            <button onClick={() => handleAddtoCart(props.product)} className='button'><span className='cart-text'>
                Add to Cart  
                <FontAwesomeIcon icon= {faShoppingCart} />
            </span></button>
        </div>
    );
};

export default Products;
import React from 'react';
import './Product.css';

const Products = (props) => {
    const {img,price,name,seller,quantity}=props.product;
    return (
        <div className='product'>
            <img src={img} />
            <h4>{name}</h4>
            <h3>Price: {price} Tk</h3>
            <h3>Brand: {seller}</h3>
            <button className='button'><span className='cart-text'>Add to Cart</span></button>
        </div>
    );
};

export default Products;
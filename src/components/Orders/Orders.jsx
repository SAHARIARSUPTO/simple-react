import React from 'react';
import './Order.css';
import Cart from '../Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
 const cart=useLoaderData();
    return (
        
             <div className='shop-container'>
            <div className='product-cart'>
            <p className='color-changing-text'>Your Orders Here</p>
            <img src='https://media.tenor.com/D-SlWEu_sDkAAAAM/dogs-doge.gif'></img>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
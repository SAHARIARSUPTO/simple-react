import React, { useState } from 'react';
import './Order.css';
import Cart from '../Cart';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Review from '../Order Review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Header from '../Header';
import Checkout from '../Checkout';

const Orders = () => {
 const savedCart=useLoaderData();
 const [cart, setCart] = useState(savedCart)
//  console.log(savedCart);
const handleRemoveFromCart = (id) => {
       const remaining = cart.filter(product => product.id !== id);
       setCart(remaining);
       removeFromDb(id);
}
const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
}

    return (
        
             <div className='shop-container'>
            <div className='product-cart'>

            {
                cart.map(product => <Review
                key={product.id}
                product={product}
                handleRemoveFromCart ={handleRemoveFromCart}
                >

                </Review>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                    
                        <a href="/Checkout"><button className='button-pri'>CheckOut</button></a>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
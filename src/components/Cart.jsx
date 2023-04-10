import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;


    let total = 0;
    let totalshipping = 0;
    for(const product of cart){
        total=total+product.price;
        totalshipping = totalshipping + product.shipping;
    }
    const tax= total*5/100;
    const subTotalAmount = total+totalshipping+tax;
    return (
        <div className='cart'>
            <h1>Checkout</h1>
            <h3>Selected Items: {cart.length}</h3>
            <h3>Total Price: {total}Tk</h3>
            <h3>Total Shipping Charge: {totalshipping}Tk</h3>
            <h3>Total Tax(5%): {tax.toFixed(2)}Tk</h3>
            <h3>Subtotal Amount: {subTotalAmount.toFixed(2)}Tk</h3>
            

        </div>
    );
};

export default Cart;
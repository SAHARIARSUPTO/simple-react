import React, { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import './Shop.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from './utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect (() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect (()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id=== id);
            
            if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
        }
        setCart(savedCart);
    },[products] )
    
    const handleAddtoCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);

    }
const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
}
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {
                products.map(product => <Products
                key={product.id}
                product = {product}
                handleAddtoCart={handleAddtoCart}
                ></Products>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                  <button className='button-pri'><a className='decor' href="/Order" >Proceed</a></button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
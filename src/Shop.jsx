import React, { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import './Shop.css';
import Cart from './components/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect (() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    
    const handleAddtoCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
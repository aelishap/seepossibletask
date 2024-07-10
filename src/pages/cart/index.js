import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Product from '../../components/product';
import { message } from 'antd';
import Layout from '../layout';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    message.success("Product removed from cart")
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        {cart?.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((product) => (
            <Product key={product.id} product={product} isCart={true} removeFromCart={removeFromCart} />
          ))}
        </div> : <div className="flex h-[60vh] items-center justify-center h-full">
          <p className="text-gray-500 text-lg">No products found in the cart.</p>
        </div>}
      </div>
    </Layout>

  );
};

export default Cart;

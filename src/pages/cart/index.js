import React, { useState, useEffect } from 'react';
import Product from '../../components/product';
import { message, Typography } from 'antd';
import Layout from '../layout';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    message.success("Product removed from cart")
  };

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Typography className='py-2 text-[24px] font-semibold'> YourCart</Typography>
        {cart?.length > 0 ?

          <div className="border-2 rounded-md bg-white">
            <div className='flex px-4 py-1 mb-4' style={{ borderBottom: "2px solid #e9e8e8" }}>
              <Typography className='text-[16px] w-[20%] flex justify-center'>Name</Typography>
              <Typography className='text-[16px] w-[20%] flex justify-center'>Image</Typography>
              <Typography className='text-[16px] w-[20%] flex justify-center'>Option</Typography>
              <Typography className='text-[16px] w-[20%] flex justify-center'>Price</Typography>
              <Typography className='text-[16px] w-[20%] flex justify-center'>Action</Typography>
            </div>
            <div>
              {cart?.map((product) => (
                <Product key={product.id} product={product} isCart={true} removeFromCart={removeFromCart} />
              ))}

            </div>
          </div> :
          <div className="flex h-[60vh] items-center justify-start h-full">
            <p className="text-gray-500 text-lg">There is no product in your cart,start shopping with us.</p>
          </div>}
      </div>
    </Layout>

  );
};

export default Cart;

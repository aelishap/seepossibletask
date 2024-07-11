import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Product from '../../components/product';
import { message, Typography } from 'antd';
import Layout from '../layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product.actions';

const Dashboard = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state?.productReducer)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  console.log(products,'products')
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      console.log("ahgasgasgas")
      message.error('Product already added to cart!');
      return;
    }
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    message.success('Product added to cart!');

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

 

  return (
    <Layout>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Typography className='py-2 text-[24px] font-semibold'>Products</Typography>
        <div className="border-2 rounded-md bg-white">
          <div className='flex px-4 py-1 mb-4' style={{borderBottom:"2px solid #e9e8e8"}}>
            <Typography className='text-[16px] w-[20%] flex justify-center'>Name</Typography>
            <Typography className='text-[16px] w-[20%] flex justify-center'>Image</Typography>
            <Typography className='text-[16px] w-[20%] flex justify-center'>Option</Typography>
            <Typography className='text-[16px] w-[20%] flex justify-center'>Price</Typography>
            <Typography className='text-[16px] w-[20%] flex justify-center'>Action</Typography>
          </div>
          <div>
          {products?.products?.map((product) => (
            <Product key={product.id} product={product} isCart={false} addToCart={() => addToCart(product)} />
          ))}
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Dashboard;

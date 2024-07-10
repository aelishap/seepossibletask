import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Product from '../../components/product';
import { message } from 'antd';

const Dashboard = () => {

    const initialProducts = [
      { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description for product 2', price: 200 },
      { id: 3, name: 'Product 3', description: 'Description for product 2', price: 300 },

    ];
  
    const [products, setProducts] = useState(initialProducts);
  
    const [cart, setCart] = useState([]);

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
  
    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} isCart={false} addToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Dashboard;

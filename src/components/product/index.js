import { Typography } from 'antd';
import React from 'react';

const Product = ({ product, isCart = false, addToCart, removeFromCart }) => {

  return (<div className='flex justify-between px-4 py-1 mt-4' style={{ borderBottom: "2px solid #e9e8e8" }}>
    <Typography className='w-[20%] flex justify-center text-[16px] font-medium'>{product?.title}</Typography>
    <div className='w-[20%] flex justify-center'>
      <img src={product?.images[0]} alt={"error"} className="w-[120px] h-[120px]  mb-4 shadow rounded-md" />
    </div>
    <div className=' w-[20%] text-[16px]'>
      <div className='flex  justify-center gap-1'>
        <div className='h-5 w-5 rounded-full bg-[#f6e3cb]' style={{ border: "1px solid lightgray" }}></div>
        <div className='h-5 w-5 rounded-full bg-[#f29999]' style={{ border: "1px solid lightgray" }}></div>
        <div className='h-5 w-5 rounded-full bg-[pink]' style={{ border: "1px solid lightgray" }}></div>
      </div>
      <div className='flex justify-center mt-2 gap-1'>
        <Typography className='text-[16px] bg-[#f2efed] rounded-sm py-[2px] px-2'>M</Typography>
        <Typography className='text-[16px] bg-[#f2efed] rounded-sm py-[2px] px-2'>L</Typography>
        <Typography className='text-[16px] bg-[#f2efed] rounded-sm py-[2px] px-2'>XL</Typography>
      </div>

    </div>
    <div className='w-[20%]  text-[17px]'>
      <Typography className='font-semibold text-[19px] flex justify-center'>₹{(product?.price - (product?.price * product?.discountPercentage) / 100).toFixed(2)}</Typography>
      <Typography className='flex justify-center line-through'>₹{product?.price}</Typography>
    </div>
    <div className='w-[20%]'>
      {!isCart ? <div className='flex justify-center'><button
        onClick={() => addToCart(product)}
        className="w-[70%] px-4 py-2 text-white bg-[gray] rounded hover:bg-[#242424]"
      >
        Add to Cart
      </button></div> :
        <div className='flex justify-center'>
          <button
            onClick={() => removeFromCart(product.id)}
            className="w-[70%] px-4 py-2 text-white bg-[gray] rounded hover:bg-[#242424]"
          >
            Remove
          </button>
        </div>}
    </div>
  </div>)
};

export default Product;

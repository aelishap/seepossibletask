import React from 'react';

const Product = ({ product,isCart=false,addToCart,removeFromCart }) => {
  const { id, name, description, price, imageUrl } = product;


  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="font-semibold mb-4">${price}</p>
     {!isCart ? <button
        onClick={()=>addToCart(product)}
        className="w-full px-4 py-2 text-white bg-[#E48700] rounded hover:bg-[#f8e1c0]"
      >
        Add to Cart
      </button>:<button
        onClick={()=>removeFromCart(product.id)}
        className="w-full px-4 py-2 text-white bg-[#E48700] rounded hover:bg-[#f8e1c0]"
      >
        Remove From Cart
      </button>}
    </div>
  );
};

export default Product;

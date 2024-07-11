import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AUTH } from '../../redux/actionTypes';
import { Typography } from 'antd';

const Header = () => {
  const user= JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleCartClick = () => {
    navigate('/cart');
  };

  const onLogout = ()=>{
    dispatch({
      type: AUTH,
        payload: false
      })
      localStorage.removeItem('user');
      localStorage.removeItem('cart');

    navigate('/login');
  }

  return (
    <div className="flex justify-between items-center p-4  text-black bg-[#fff]"  >
      <div className="text-3xl font-semibold text-[#242424] cursor-pointer" onClick={()=>navigate("/dashboard")}>JEWEL DESIGN</div>
      <div className="flex items-center space-x-4">
        <ShoppingCartOutlined
          className="text-2xl cursor-pointer"
          onClick={handleCartClick}
        />
        <Typography className='text-[16px]'>Welcome, {" "}{user?.username}</Typography>
        <div style={{borderLeft:"2px solid black"}} className='h-5'></div>
        <Typography className=' text-[16px] hover:text-[black] cursor-pointer'  onClick={onLogout}> Logout</Typography>

      </div>
    </div>
  );
};

export default Header;

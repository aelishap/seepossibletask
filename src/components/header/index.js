import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { AUTH } from '../../redux/actionTypes';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = ()=>{
    navigate('/profile');
  }

  const onLogout = ()=>{
    dispatch({
        type: AUTH,
        payload: false
      })
    navigate('/login');
  }

  return (
    <div className="flex justify-between items-center p-4  text-white bg-[#ECBC76]"  >
      <div className="text-3xl font-bold">Aelisha</div>
      <div className="flex items-center space-x-4">
        <ShoppingCartOutlined
          className="text-2xl cursor-pointer"
          onClick={handleCartClick}
        />
        <UserOutlined   className="text-2xl cursor-pointer"
          onClick={handleProfileClick} />
          <button
          onClick={onLogout}
          className="px-4 py-2 bg-[#E48700] rounded hover:bg-[#f8e1c0]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

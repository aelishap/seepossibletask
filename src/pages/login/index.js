import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.actions';
import { Form, Input, Button, Alert, Typography, message } from 'antd';
import { Images } from '../../assests/images/images';
import { AUTH } from '../../redux/actionTypes';

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.authReducer);


  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (values) => {
    // dispatch(login(values));
    dispatch({
      type: AUTH,
      payload: true
    })
    localStorage.setItem('cart', JSON.stringify([]));
    message.success('Login Successfully!');

    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(90deg, #ECBC76 50%, #FFFFFF 50%)' }}>
      <div className=" w-[80%] md:w-[47%] xl:w-[35%]  p-8 bg-white rounded-[8%] shadow-2xl shadow-[gray]">
        <div className='flex justify-between'>
          <div>

            <Typography className='text-[20px]'>Welcome to Lorem</Typography>
            <Typography className='text-[34px] font-bold mb-8 mt-2'>Sign in</Typography>
          </div>
          <Typography className='text-[gray]' onClick={() => {
            navigate('/register');
          }}>No account? <span className='text-[#ECBC76] cursor-pointer'>Sign up</span></Typography>
        </div>
        <Form form={form} onFinish={handleSubmit}>
          <Typography>User Name</Typography>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Typography> password</Typography>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }, {
              pattern: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/),
              message: 'Password must be at least 5 characters long, and contain 1 upper case letter, 1 lower case letter, and 1 digit.'
            }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-[#E48700] text-[white] py-6 rounded-lg my-4 md:my-8">
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-4 text-center">
          <Typography className='text-[gray]'>Or</Typography>
          <div className='flex justify-center gap-4 mt-8'>
            <div className='flex justify-center gap-4 mt-8'>
              <img src={Images.google} className="w-[80%] md:w-[75%] lg:w-[60%]" alt="Google" />
              <img src={Images.facebook} className="w-[10%] md:w-[15%] lg:w-[20%]" alt="Facebook" />
              <img src={Images.apple} className="w-[10%] md:w-[15%] lg:w-[20%]" alt="Apple" />
            </div>
          </div>

        </p>

      </div>
    </div>
  );
};

export default Login;

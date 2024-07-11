import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.actions';
import { Form, Input, Button, Alert, Typography, message } from 'antd';

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);
  const user = localStorage.getItem("user");
  const isAuthenticated = state?.isAuthenticated || JSON.parse(user)?.username ? true : false;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (values) => {
    dispatch(login(values, (success) => {
      if (success) {
        message.success('Login Successfully!');
        navigate('/dashboard');
      } else {
        message.error('Please enter valid username or password!');
      }
    }));

  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(90deg, gray 50%, #FFFFFF 50%)' }}>
      <div className=" w-[80%] md:w-[47%] xl:w-[35%]  p-8 bg-white rounded-[8%] shadow-2xl shadow-[gray]">
        <div className='flex justify-between'>
          <div>
            <Typography className='text-[20px]'>Welcome</Typography>
            <Typography className='text-[34px] font-bold mb-8 mt-2'>Sign in</Typography>
          </div>
          <Typography className='text-[gray]' onClick={() => {
            navigate('/register');
          }}>No account? <span className='text-[#242424] cursor-pointer'>Sign up</span></Typography>
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
            rules={[{ required: true, message: 'Please enter your password!' }]}
          // rules={[{ required: true, message: 'Please enter your password!' }, {
          //   pattern: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/),
          //   message: 'Password must be at least 5 characters long, and contain 1 upper case letter, 1 lower case letter, and 1 digit.'
          // }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-[gray] rounded hover:bg-[#242424] w-full text-[white] py-6 rounded-lg my-4 md:my-8">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

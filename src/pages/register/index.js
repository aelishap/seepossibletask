import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Select } from 'antd';

const { Option } = Select;

const Register = () => {
  const state = useSelector((state) => state.authReducer);
  const user = localStorage.getItem("user");
  const isAuthenticated = state?.isAuthenticated || JSON.parse(user)?.username ? true : false;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (values) => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(90deg, gray 50%, #FFFFFF 50%)' }}>
      <div className="w-[80%] md:w-[45%] xl:w-[37%] p-8 bg-white rounded-[8%] shadow-2xl shadow-[gray]">
        <div className="flex justify-between">
          <div>
            <Typography className="text-[20px]">Welcome</Typography>
            <Typography className="text-[34px] font-bold mb-4 mt-2">Sign Up</Typography>
          </div>
          <Typography className="text-[gray]" onClick={() => navigate('/login')}>
            Have an account? <span className="text-[#242424] cursor-pointer">Sign in</span>
          </Typography>
        </div>
        <Form form={form} onFinish={handleSubmit}>
          <div className='md:flex gap-2 '>
            <div className='md:w-[50%]'>
              <Typography>First Name</Typography>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'Please enter your first name!' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </div>
            <div className='md:w-[50%]'>
              <Typography>Last Name</Typography>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please enter your last name!' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className='md:flex gap-2 '>
            <div className='md:w-[50%]'>
              <Typography>Email</Typography>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: 'Please enter a valid email.',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </div>
            <div className='md:w-[50%]'>
              <Typography>Contact Number</Typography>
              <Form.Item
                name="mobile"
                rules={[
                  { required: true, message: 'Please enter your contact number!' },
                  { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit contact number!' },
                ]}
              >
                <Input placeholder="Contact Number" maxLength={10} />
              </Form.Item>
            </div>
          </div>
          <div className='md:flex gap-2 '>
            <div className='md:w-[50%]'>

              <Typography>Gender</Typography>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: 'Please select your gender!' }]}
              >
                <Select placeholder="Select Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>
            <div className='md:w-[50%]'>

              <Typography>State</Typography>
              <Form.Item
                name="state"
                rules={[{ required: true, message: 'Please enter your state!' }]}
              >
                <Input placeholder="State" />
              </Form.Item>
            </div>
          </div>
          <div className='md:flex gap-2 '>
            <div className='md:w-[50%]'>

              <Typography>City</Typography>
              <Form.Item
                name="city"
                rules={[{ required: true, message: 'Please enter your city!' }]}
              >
                <Input placeholder="City" />
              </Form.Item>
            </div>
            <div className='md:w-[50%]'>

              <Typography>Country</Typography>
              <Form.Item
                name="country"
                rules={[{ required: true, message: 'Please enter your country!' }]}
              >
                <Input placeholder="Country" />
              </Form.Item>
            </div></div>
          <Typography>Password</Typography>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter your password!' },
              {
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/,
                message: 'Password must be at least 5 characters long, and contain 1 upper case letter, 1 lower case letter, and 1 digit.',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-[gray] rounded hover:bg-[#242424] text-[white] py-6 rounded-lg mt-4">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

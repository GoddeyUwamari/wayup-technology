import React, { useState } from 'react';
import { loginUser } from '../apiServices';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData)
      console.log('User logged in:', response);
    } catch (error) {
      console.error('Error logging user:', error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>      
      <input type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      <input type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password" 
        />
      
      <button type="submit">Login</button>
    </form>
   
  )
};

export default Login;
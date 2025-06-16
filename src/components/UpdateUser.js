import React, { useState, useContext } from 'react';
import { updateUser } from '../apiServices';
import { AuthContext } from './AuthContext';

const UpdateUser = () => {
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(formData)
      console.log('User updated:', response);
    } catch (error) {
      console.error('Error updating user:', error);
    }
    login('new-token');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      
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
      
      <button type="submit">Update</button>
    </form>
   
  )
};

export default UpdateUser;
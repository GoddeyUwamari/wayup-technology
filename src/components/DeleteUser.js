import React, { useContext } from 'react';
import { deleteUser } from '../apiServices';
import { AuthContext } from './AuthContext';

const DeleteUser = () => {
  const { logout } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      const response = await deleteUser()
      console.log('User deleted:', response);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    logout();
  }
  
  return (
      <button onClick={handleDelete}>Delete user</button>   
  )
};

export default DeleteUser;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
 

const LoginService = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      return response.data;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };
  
  export default LoginService;
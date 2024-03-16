import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Cambia esto a la URL de tu API

const OrderService = {

  getTasadores: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/tasador`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener tasadores:', error);
      throw error;
    }
  },


  getBancos: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/banco`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener bancos:', error);
      throw error;
    }
  },

  getDepartamentos: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/departamento`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener departamentos:', error);
      throw error;
    }
  },


};

export default OrderService;
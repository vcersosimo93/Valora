import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Cambia esto a la URL de tu API

const OrderService = {

  createOrden: async (ordenData) => {
    try {
      const response = await axios.post(`${API_URL}/api/create-orden`, ordenData);
      return response.data;
    } catch (error) {
      console.error('Error al crear orden:', error);
      throw error;
    }
  },

  getTasadores: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/tasador`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener tasadores:', error);
      throw error;
    }
  },

  getTasadorById: async (id) => {
    try {
      console.log('id', id);
      const response = await axios.get(`${API_URL}/api/tasador/${parseInt(id)}`);
      return response.data; 
    } catch (error) {
      throw new Error('Error al obtener el tasador por ID: ' + error.message);
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
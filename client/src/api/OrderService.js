import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Cambia esto a la URL de tu API

const OrderService = {

  createOrden: async (ordenData) => {
    try {
      console.log('ordenData');
      console.log(ordenData);
      const response = await axios.post(`${API_URL}/api/create-orden`, ordenData);
      return response.data;
    } catch (error) {
      console.error('Error al crear orden:', error);
      throw error;
    }
  },

  getTasadores: async () => {
    try {
      console.log('getTasadores');
      const response = await axios.get(`${API_URL}/api/tasadores`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener tasadores:', error);
      throw error;
    }
  },

  getTasadorById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/api/tasador/${parseInt(id)}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el tasador por ID: ' + error.message);
    }
  },

  getBancoById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/api/banco/${parseInt(id)}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener bancos:', error);
      throw error;
    }
  },

  getBancos: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/bancos`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener bancos:', error);
      throw error;
    }
  },

  getDepartamentoById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/api/departamento/${parseInt(id)}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener departamento:', error);
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
import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.product.addProducts, body, config);
  return response.data;
};

const deleteProducts = async (id) => {
  const response = await axios.delete(endPoints.product.deleteProduct(id));
  return response.data;
};

const updateProducts = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.product.updateProduct(id), body, config);
  return response.data;
};

export { addProduct, deleteProducts, updateProducts };

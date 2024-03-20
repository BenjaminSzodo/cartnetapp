import axios from 'axios';
import {
  ALL_USERS,
  POST_USER,
  EDIT_USER,
  USER_BY_ID,
  DELETE_USER
} from './actionTypes';

// Action para obtener todos los usuarios
export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/users');
      dispatch({
        type: ALL_USERS,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      // Aquí podrías despachar otra acción para manejar el error, si lo deseas
    }
  };
};

// Action para crear un nuevo usuario
export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/users', userData);
      dispatch({
        type: POST_USER,
        payload: response.data
      });
    } catch (error) {
      console.error('Error creating user:', error);
      // Aquí podrías despachar otra acción para manejar el error, si lo deseas
    }
  };
};

// Action para editar un usuario existente
export const editUser = (userId, updatedUserData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, updatedUserData);
      dispatch({
        type: EDIT_USER,
        payload: response.data
      });
    } catch (error) {
      console.error('Error editing user:', error);
      // Aquí podrías despachar otra acción para manejar el error, si lo deseas
    }
  };
};

// Action para obtener un usuario por su ID
export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      dispatch({
        type: USER_BY_ID,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      // Aquí podrías despachar otra acción para manejar el error, si lo deseas
    }
  };
};

// Action para eliminar un usuario
export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: userId
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      // Aquí podrías despachar otra acción para manejar el error, si lo deseas
    }
  };
};


import {
    ALL_USERS,
    POST_USER,
    EDIT_USER,
    USER_BY_ID,
    DELETE_USER
  } from './actionTypes';
  
  const initialState = {
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case ALL_USERS:
        return {
          ...state,
          users: action.payload
        };
      case POST_USER:
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case EDIT_USER:
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          )
        };
      case USER_BY_ID:
        return {
          ...state,
          user: action.payload
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
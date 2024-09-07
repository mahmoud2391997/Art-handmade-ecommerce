// src/Redux/Reducers/contactReducer.js
import {
    FETCH_MESSAGES,
    ADD_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_MESSAGE,
  } from "../actionTypes";
  
  const initialState = {
    messages: [],
    status: "idle",
    error: null,
  };
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MESSAGES: {
        return {
          ...state,
          messages: action.payload,
          status: "succeeded",
        };
      }
      case ADD_MESSAGE: {
        return {
          ...state,
          messages: [...state.messages, action.payload],
          status: "succeeded",
        };
      }
      case DELETE_MESSAGE: {
        return {
          ...state,
          messages: state.messages.filter(
            (message) => message.id !== action.payload
          ),
          status: "succeeded",
        };
      }
      case UPDATE_MESSAGE: {
        return {
          ...state,
          messages: state.messages.map((message) =>
            message.id === action.payload.id ? action.payload : message
          ),
          status: "succeeded",
        };
      }
      default:
        return state;
    }
  };
  
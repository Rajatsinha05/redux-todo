import {
  DECREASE,
  INCREASE,
  MULTIPLE,
  DIVISION,
  RESET,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./ActionType";

export const add = (data) => {
  return {
    type: INCREASE,
    payload: data,
  };
};

export const remove = (data) => {
  return {
    type: DECREASE,
    payload: data,
  };
};

export const multipale = (data, data2) => {
  return {
    type: MULTIPLE,
    payload: data,
    payload2: data2,
  };
};

export const division = (data, data2) => {
  return {
    type: DIVISION,
    payload: data,
    payload2: data2,
  };
};

export const reset = (data) => {
  return {
    type: RESET,
    payload: data,
  };
};

// todos

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

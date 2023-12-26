import {
  DECREASE,
  INCREASE,
  MULTIPLE,
  RESET,
  DIVISION,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./ActionType";

let initalState = {
  todo: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id != payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((todo) =>todo.id==payload ? {...todo,isCompleted:!(todo.isCompleted)} :todo)
         
      };
    default:
      return state;
  }
};

import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from '../types/user';

const addUserAction = (user) => {
   return {
      type: ADD_USER,
      payload: user,
   };
};

const deleteUserAction = (id) => {
   return { type: DELETE_USER, payload: id };
};

const editUserAction = (user) => {
   return { type: EDIT_USER, payload: user };
};

const updateUserAction = (user) => {
   return { type: UPDATE_USER, payload: user };
};

export { addUserAction, deleteUserAction, editUserAction, updateUserAction };

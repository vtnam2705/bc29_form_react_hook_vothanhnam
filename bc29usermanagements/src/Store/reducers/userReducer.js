import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from '../types/user';

let userLocalStorage = JSON.parse(localStorage.getItem('USER'));

if (!userLocalStorage) {
   userLocalStorage = [

      {
         id: '1',
         username: 'thanhnam2705',
         fullname: 'Võ Thành Nam',
         email: 'vtnam98@gmail.com',
         password: 'abc1998',
         phonenumber: '0332556565',
         type: 'Client',
      },
      {
         id: '2',
         username: 'thanhnguyen0801',
         fullname: 'Võ Thành Nguyên',
         email: 'vtnguyen91@gmail.com',
         password: 'def1991',
         phonenumber: '0656565656',
         type: 'Client',
      }
   ];
}

const DEFAULT_STATE = {
   userList: userLocalStorage,
   selectedUser: null,
};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
   switch (type) {
      case ADD_USER: {
         const data = [...state.userList];

         data.push({ ...payload, id: Date.now() });

         localStorage.setItem('USER', JSON.stringify(data));

         state.userList = data;

         return { ...state };
      }

      case DELETE_USER: {
         const data = [...state.userList];

         const index = data.findIndex((ele) => ele.id === payload);

         if (index !== -1) {
            data.splice(index, 1);
         }

         localStorage.setItem('USER', JSON.stringify(data));

         state.userList = data;

         return { ...state };
      }

      case EDIT_USER: {
         state.selectedUser = payload;
         return { ...state };
      }

      case UPDATE_USER: {
         const data = [...state.userList];

         const index = data.findIndex((ele) => payload.username === ele.username);

         if (index !== -1) {
            data[index] = payload;
         }

         state.userList = data;

         return { ...state };
      }
      default:
         return state;
   }
};

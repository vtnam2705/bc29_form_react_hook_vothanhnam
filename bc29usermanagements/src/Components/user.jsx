import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, editUserAction } from '../Store/actions/user';

export default function User() {
   const userState = useSelector((state) => state.userReducer);
   const dispatch = useDispatch();

   const [search, setSearch] = useState({
      keyword: '',
      type: 'All',
   });

   const handleChange = (event) => {
      const { value, name } = event.target;

      setSearch({ ...search, [name]: value });
   };

   const renderUserList = () => {
      let dataFilter = userState.userList.filter(
         (ele) =>
            ele.fullname
               .toLowerCase()
               .trim()
               .indexOf(search.keyword.toLocaleLowerCase().trim()) !== -1
      );

      if (search.type !== 'All') {
         dataFilter = dataFilter.filter((ele) => ele.type === search.type);
      }

      return dataFilter.map((user, index) => {
         const { id, username, fullname, email, phonenumber, type } = user;

         return (
            <tr key={id} className="bg-light">
               <td>{index + 1}</td>
               <td>{username}</td>
               <td>{fullname}</td>
               <td>{email}</td>
               <td>{phonenumber}</td>
               <td>{type}</td>
               <td>
                  <button
                     onClick={() => dispatch(editUserAction(user))}
                     className="btn btn-info mr-2"
                  >
                     EDIT
                  </button>
                  <button
                     onClick={() => dispatch(deleteUserAction(id))}
                     className="btn btn-danger"
                  >
                     DELETE
                  </button>
               </td>
            </tr>
         );
      });
   };

   return (
      <div className="card p-0 mt-3">
         <div className="card-header font-weight-bold">USER MANAGEMENT</div>
         <div className="row mt-4 px-3 ">
            <div className="col-4">
               <div className="form-group mb-0">
                  <input
                     name="keyword"
                     onChange={handleChange}
                     type="text"
                     placeholder="Search by full name..."
                     className="form-control"
                  />
               </div>
            </div>
            <div className="col-3 ml-auto">
               <div className="form-group mb-0">
                  <select name="type" onChange={handleChange} className="form-control">
                     <option>All</option>
                     <option>Client</option>
                     <option>Admin</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="card-body">
            <table className="table">
               <thead>
                  <tr>
                     <th>No.</th>
                     <th>Username</th>
                     <th>Full Name</th>
                     <th>Email</th>
                     <th>Phone Number</th>
                     <th>Type</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>{renderUserList()}</tbody>
            </table>
         </div>
      </div>
   );
}

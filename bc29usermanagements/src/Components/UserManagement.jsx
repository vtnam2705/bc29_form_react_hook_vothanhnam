import React, { Component } from 'react';
import Register from './register';
import User from './user';

export default class BaiTapQuanLyNguoidung extends Component {
   render() {
      return (
         <div className="w-75 mx-auto mt-5">
            <Register />
            <User />
         </div>
      );
   }
}
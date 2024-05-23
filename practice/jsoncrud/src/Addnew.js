import React from 'react'
import Mainpage from './Mainpage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

function Addnew() {
  return (

    <div>
        <Link to="/">Back to home</Link>
        <h1>Add new User</h1>
    </div>
  )
}

export default Addnew
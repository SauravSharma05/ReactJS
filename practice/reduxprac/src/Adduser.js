import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addusers } from "./Reducer";
// let index =4;


function AddUser() {
    const users = useSelector((state) => state.data);
    console.log(users.length)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log(name,email)

        dispatch(addusers({id:users.length+1,name,email}))
        nav('/')


    }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="py-3">
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link className="btn btn-warning" to="/add-user">
                Add New
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label  className="form-label">
                  Name
                </label>
                <input
                  type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}


                  className="form-control"
                  id=""
                  placeholder="Enter name..."
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Email
                </label>
                <input
                  type="text"

                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}

                  className="form-control"
                  id=""
                  placeholder="Enter Email..."
                />
              </div>

              <div className="mb-3">
                <input type="submit" className="btn btn-primary" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
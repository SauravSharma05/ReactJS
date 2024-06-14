import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  editUser } from "./Reducer";
import { useNavigate, useParams } from "react-router-dom";

function Edituser() {
  const users = useSelector((state) => state.userData);
  const {eId} = useParams();//3
  const existingUser = users.filter((user)=>{return (user.id == eId)})

//   console.log(existingUser);//[{…}]

console.log(existingUser[0]);//{id: 3, name: 'sdfsdfsdfsf'}

const {name} = existingUser[0]
//    console.log(name)
  const [uname, setuName] = useState(name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name)
    dispatch(editUser({id:eId,uname}));

    navigate("/");
  };
  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          Id: <input type="text" disabled={true} value={eId}></input>
          <br></br>
          Name :{" "}
          <input
            type="text"
            name=""
            value={uname}
            onChange={(e) => {
              setuName(e.target.value);
            }}
          />
          <br />
          <button type="submit">Edit</button>
        </form>
      </center>
    </div>
  );
}

export default Edituser;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";
import { Link } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.data);
console.log(users)
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
        <div className="py-6">
        <Link to='/'>Home</Link>
        </div>
            <div>
                <h2>Users Data</h2>
            </div>
            <div>
                <Link className="btn btn-warning" to='/add-user'>Add New</Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>{
                users.map((v)=>(                    
                <tr key={v.id}>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-success mx-3">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
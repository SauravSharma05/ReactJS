import React, { useState } from 'react'
import Mainpage from './Mainpage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from 'react-router-dom';

function Addnew() {

  const [name,setName] = useState("")
const nav =  useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
          console.log(name);

          const forminp = {name}

          fetch('http://localhost:7000/users',{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(forminp)            
        })
        .then((res)=>{
            if(res)
                {
                    alert("User added...!");
                    nav('/')
                }
        })

    }

  return (

    <div>
        <Link to="/">Back to home</Link>
        <h3>Add new User</h3>


          <div className='container'>
          <div className='row '>
            <div className='col-xl border border-dark'>

        <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  class="form-control"
                  placeholder="name enter"
                />
              </div>
              <div class="mb-3">
                <input type="submit" value="Add" className="btn btn-primary" />
              </div>
            </form>
                  </div>
          </div>
          </div>

    </div>
  )
}

export default Addnew
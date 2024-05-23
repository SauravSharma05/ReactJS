import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Mainpage() {



     useEffect(()=>{

        fetch('http://localhost:8000/users')
        .then((res)=>{return res})
        .then((data)=>{

                console.log(data);

        })
    },[])


  return (
    <div>        
        <ul>
            <li><Link to="/addnew">addnew</Link></li>
        </ul>
         

        <table className="table">
                <thead className="table-dark">
                <th scope="col">Name</th>
                </thead>
                <tbody>
                    
                </tbody>
        </table>

    </div>
  )
}


export default Mainpage
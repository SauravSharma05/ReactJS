import React, { useEffect } from 'react'

function Fetching() {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{ return res.json()})
        .then((data)=>{
            console.log(data)
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default Fetching
import React, {useState} from 'react'

 function Addarr() {

    const [name, setName] = useState('')


  return (
    <div>
        Name  : 
        <input type='text'
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
        
       />

    <button onClick={()=>{
        onadd(name)
    }}>
        Add new user
    </button>




    </div>
  )
}

export default Addarr

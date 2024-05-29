import React, { useContext, useState } from 'react'

function Multihooksuse() {

    const {setCurrentUser} = useContext(userContext)
    const [fname,setFname] = useState("");
    const [lname,setLame] = useState("");

   const canLogin = fname=="" || lname=="";
  return (
    <div>

    <div>
        Firstname:  <input
        value={fname}
        onChange={(e)=>{setFname(e.target.value)}}
        ></input>            
    </div>
    <div>
    Lastname:  <input
     value={lname}
     onChange={(e)=>{setLame(e.target.value)}}></input>
    </div>
    <div>
    {/* <button>Login</button> */}
    <Button disabled={canLogin} onclick={()=>{
        setCurrentUser({
            fullname:fname + " " +lname
        })
    }}>
        Login
    </Button>
    </div>
  
</div>
  )
}

export default Multihooksuse
import React, { useEffect, useState } from 'react'

function Hook1()
{

    const [x, setx] = useState(1)                           // USE EFFECT 

    // syntax of useEffect
    // useEffect(()=>{})
    // useEffect(()=>{},[])
    // useEffect(()=>{},[3,4])

    // const handleChange = ()=>{
    //     setx(12)
    // }

    // useEffect(()=>{
    //     setx(x+1)    
    // })

    
    useEffect(()=>{         
        setInterval(() => {
            // setx(x+1)    
        }, 700);
    })


    return(
        <div>
             <h1>{x}</h1>
        </div>
    )
}

export default Hook1
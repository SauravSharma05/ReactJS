import React, { useState } from 'react'

function MouseMove() {

    const [position,setPosition] = useState({x:0,y:0})

    // tag.addEventListener('event',fun);

    const handleMove = (e)=>{

        // console.log(e)
        setPosition(
            {x:e.clientX,y:e.clientY}
        )
    }
    window.addEventListener("mousemove",handleMove);

  return (
    <div style={{
        height:20,
        width:"20px",
        background:'blue',
        borderRadius:"50%",
        transform:`translate(${position.x}px,${position.y}px)`,
        position:'absolute',
        top:-10,
        left:-12
    }}>
      
    </div>
  )
}

export default MouseMove
import React, { useEffect, useRef } from 'react'

function Box() {

    const divRef = useRef()
   useEffect(()=>{
    const div_tag = divRef.current;

    const observer = new IntersectionObserver((xyz)=>{

        console.log(xyz)
       let entry = xyz[0]
       console.log(entry)

       if(entry.isIntersecting)
        {
            document.body.style.background = "#000";
            document.body.style.color = "#fff";
        }
        else 
        {
            document.body.style.background = "#fff";
            document.body.style.color = "#000";
        }
    },{
        threshold:0.5
    })

    observer.observe(div_tag);


   })



  return (
    <div ref={divRef} style={{
        height:100,
        width:100,
        background:'lightblue'
    }}>
      
    </div>
  )
}

export default Box
import React, { useState } from 'react'
import Addarr from './Addarr';


 let ind = 4;
 function Allcrud() {


    const [arr, setArr] = useState([
        {name:'ram', id:1},
        {name:'shyam', id:2},
        {name:'ghanshyam', id:3},
    ]);

    const addNew = (name) => {
        setArr([
            ...arr,
            {name:name, id:ind++}            
        ]);
    } 






  return (
    <div>
        <Addarr onadd={addNew} />

    </div>
  )
}

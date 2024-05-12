import React from 'react'
import Box from './Box';
let x=[];
let num=0;
function ListItems() {

    for(let i=1;i<=50;i++)
        {
            x.push(<li key={num++}>list {i}</li>)
        }
  return (
    <div>
      {x}
      
      <Box/>

      {x}
      
    </div>
  )
}

export default ListItems
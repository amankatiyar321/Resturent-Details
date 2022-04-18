import React from 'react'
import './list.css'
const  Todoitem = (props) => {
console.log(props)

const {title,id,handleremove,color} = props;


  return (
    <div className="btndiv">
        <h1  className='baby'>{title}</h1>
       
        <button style={{color}} className='delbutton' onClick={()=>handleremove(id)} >Delete</button>
    </div>
  )
}

export default Todoitem;
import React, { useState } from 'react'

const AddTodo = (props) => {
    const[title,settitle]=useState('');
    const[desc,setdesc]=useState('')

    const submit = (e)=>{
e.preventDefault();
if(!title||!desc){
    alert('title or description cannot be blank')
}else{
props.addTodo(title,desc)
settitle('');
setdesc('');
}


    }
  return (
    <div className='container my-3'>
        <h3 className='text-center'>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="htmlform-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}className="htmlform-control" id="title" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="htmlform-label">Todo descroption</label>
    <input type="text"value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="htmlform-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-success btn-sm">add Todo</button>
</form>
    </div>
  )
}

export default AddTodo

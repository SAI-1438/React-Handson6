import React, {useContext} from 'react'
import store from './Store'
import { useLocation, useNavigate } from 'react-router-dom'

function Update() {
  const ContextData=useContext(store);
  const Navi=useNavigate();
  const index=useLocation().state.data;

  const updateObj={
    Name: ContextData.entries[index].Name,
    Age:ContextData.entries[index].Age,
    Course:ContextData.entries[index].Course,
    Batch:ContextData.entries[index].Batch
  }

  const handleChange=(e)=>{
    updateObj[e.target.name]=e.target.value;
  }

  const handleUpdate=()=>{
    ContextData.entries[index]=updateObj;
    Navi(-1)
  }

  return (
    <>
    <div className='updatebox'>
    <input type='text' name='Name'placeholder={ContextData.entries[index].Name} onChange={handleChange}/>
    <input type='number' name='Age' placeholder={ContextData.entries[index].Age} onChange={handleChange}/><br/>
    <input type='text' name='Course' placeholder={ContextData.entries[index].Course} onChange={handleChange}/>
    <input type='text' name='Batch' placeholder={ContextData.entries[index].Batch} onChange={handleChange}/><br/>
    </div>
    <div className='buttons'>
      <button onClick={()=>{Navi('/Students')}} >Cancel</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
    </>
  )
}

export default Update
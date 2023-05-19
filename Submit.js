import React, { useContext } from 'react'
import store from './Store';
import { useNavigate } from 'react-router-dom';

function Submit() {
  const ContextData=useContext(store);
  const Navi=useNavigate();
  const NewObj ={
    Name:'',
    Age:'',
    Course:'',
    Batch:''
  }
  const handleChange=(e)=>{
    NewObj[e.target.name]=e.target.value;
  }
  const handleClick =()=>{
    ContextData.entries.push(NewObj);
    Navi(-1)
  }
  return (
    <>
    <div className='updatebox'>
    <input name='Name' placeholder='Enter Name' onChange={handleChange}/>
    <input  name='Age' placeholder='Enter Age' onChange={handleChange}/><br/>
    <input  name='Course' placeholder='Enter Course' onChange={handleChange}/>
    <input  name='Batch' placeholder='Enter Batch' onChange={handleChange}/><br/>
    </div>
    <div className='buttons'>
      <button onClick={()=>{Navi('/Students')}}>Cancel</button>
      <button onClick={handleClick}>Submit</button>
    </div>
    </>
  )
}

export default Submit
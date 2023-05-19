import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
import Error from './Components/Error';
import Nav from './Components/Nav';
import store from './Components/Store';
import Update from './Components/Update';
import Submit from './Components/Submit';
import { useState } from 'react';

function App() {
  const [data,setData] = useState ([
    {Name: "John",Age: "24",Course: "MERN",Batch: "October"},
    {Name: "Doe",Age: "25",Course: "MERN",Batch: "November"},
    {Name: "Biden",Age: "26",Course: "MERN",Batch: "September"},
    {Name: "Barar",Age: "22",Course: "MERN",Batch: "September"},
    {Name: "Christ",Age: 23,Course: "MERN",Batch: "October"},
    {Name: "Elent",Age: 24,Course: "MERN",Batch: "November"},
  ])
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
          <Students/>
        </store.Provider>
        }/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Update' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
        <Update/>
      </store.Provider>}/>
        <Route path='/Submit' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
        <Submit/>
      </store.Provider>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

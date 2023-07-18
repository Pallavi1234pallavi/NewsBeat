import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fetchdata from './components/Fetchdata';


const App = () => {
  return (
    <div className=" bg-orange-100  w-full  ">
 
      <Navbar/>

<div className=''>
<Routes>

<Route path="/" element= {<Home/>} />

  <Route path="/general" element= {<Fetchdata cat="general"/>} />
  <Route path="/business" element= {<Fetchdata cat="business"/>} />
  <Route path="/entertainment" element= {<Fetchdata cat="entertainment"/>} />
  <Route path="/health" element= {<Fetchdata cat="health"/>} />
  <Route path="/science" element= {<Fetchdata cat="science"/>} />
  <Route path="/sports" element= {<Fetchdata cat="sports"/>} />
  <Route path="/technology" element= {<Fetchdata cat="technology"/>} />
</Routes>
</div>
 
     
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextData from './ContextData';
import Home from './Home';
import Table from './Table'
import AddNew from './AddNew';
import EditStudent from './EditStudent';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';
import NavBar from './NavBar';

export const RoutingFiles = () => {
  const [data, setData] = useState([
                            {name : "Tarun", age : 26, course : "MERN", batch : "October"},
                            {name : "John", age : 25, course : "MEAN", batch : "November"},
                            {name : "Ron", age : 27, course : "MERN", batch : "December"},
                            {name : "Ami", age : 24, course : "MEAN", batch : "January"},
                            {name : "Naman", age : 28, course : "MERN", batch : "February"},
                           ])
  return (
       <> 
       <BrowserRouter>
       <NavBar/>

        <Routes>
           <Route path='/' element={<Home/>}/>

           <Route path='/student' element={
             <ContextData.Provider value={{entries : data, update : setData}}>
                <Table/>
             </ContextData.Provider>
            }/>

           <Route path='/addNew' element={
             <ContextData.Provider value={{entries : data, update : setData}}>
                <AddNew/>
             </ContextData.Provider>
            }/>

            <Route path="/editStudent" element={
            <ContextData.Provider value={{entries:data, update:setData}}>
               <EditStudent/>
            </ContextData.Provider>     
             }/>

           <Route path='/contactUs' element={<ContactUs/>}/>



           <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
       </BrowserRouter>
       </>
    )
}

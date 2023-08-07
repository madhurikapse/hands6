import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ContextData from './ContextData';

const EditStudent = () => {
    const Data = useContext(ContextData);
    const index = useLocation().state.data;
    const nav = useNavigate();
    console.log(index);
    console.log(Data);

    //Current Data-->
    const EditData = {
      name: Data.entries[index].name,
      age: Data.entries[index].age,
      course: Data.entries[index].course,
      batch: Data.entries[index].batch
    };

    const handleChange = (e) => {
      EditData[e.target.name] = e.target.value
    }

    const handleSubmit = () => {
      Data.entries[index] = EditData;
      nav('/student');//or nav(-1)
      console.log(Data);
    }

     const handleCancel = () =>{
      nav('/student');
     }

    return (
      <>     
          <div className="flex1">
          <fieldset>
             <legend>Name </legend>
                 <input placeholder={Data.entries[index].name} name='name' onChange={handleChange} />
          </fieldset>

          <fieldset>
             <legend>Age </legend>
            <input placeholder={Data.entries[index].age} name='age' onChange={handleChange} />    
          </fieldset>

          <fieldset>
             <legend>Course </legend>
            <input placeholder={Data.entries[index].course} name='course' onChange={handleChange} />
          </fieldset>

          <fieldset>
             <legend>Batch </legend>
            <input placeholder={Data.entries[index].batch} name='batch' onChange={handleChange} />
          </fieldset>
          </div>

          <div className='flex2'>
          <div> <button className='btn1' onClick={handleCancel}>Cancel</button></div>
           <div> <button className='btn1' onClick={handleSubmit}>Update</button></div>
          </div>
      </>
    )
}

export default EditStudent

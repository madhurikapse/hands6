import React, { useContext } from 'react'
import ContextData from './ContextData'
import { Link, useNavigate } from 'react-router-dom';

const Table = () => {
  const Data = useContext(ContextData);
  const nav= useNavigate();


  return (
    <>
         <div className='heading'>
            <h1>Student Details</h1>
            <button className='addNewBtn' onClick={()=>{nav('/addNew')}}>Add New Student</button>
          </div>
    <table>
      <thead>
         <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Course</th>
             <th>Batch</th>
             <th>Change</th>
         </tr>
      </thead>
      <tbody>
          {Data.entries.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td>
                <Link  to="/editStudent" state={{data:index}}>Edit</Link>
                  {/* here "index" is not related to "index" used in EditStudent compo */}
              </td>
            </tr>
           ))
          }
      </tbody>

  </table>  
  </>
  )
}

export default Table

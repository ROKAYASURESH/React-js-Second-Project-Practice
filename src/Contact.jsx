import React, { useState } from 'react';


export default function Contact()
 {
       const [name,setName]=useState('Suresh ');//..kunai value pathauna ko lagi
       const btnsubmit=(q)=>{
              q.preventDefault();
              console.log("Sssssss")
              setName(" loves me form the set of k")
       }

       const btninput=(t)=>
      
       {
              setName(t.target.value)
       }
  return <div>
        
    <div className="container">
           <div className="row">
                  <div className="col-lg-4 ">
                         <h2>ADD FORM</h2>
                     <form onSubmit={btnsubmit} >
                            <div className="mb-3">
                                   <label for="abc" class="form-label">Full Name</label>
                                   <input type="text" name="name" className='form-control' onChange={btninput} />
                            </div>
                            <hr />
                            <button className='btn btn-danger'>Add Form</button>
                     </form>
                  </div>

                  <div className="col-lg-4 offset-lg-2">
                         <h2>LIST FORM  {name}</h2>
                      <table className="table">
                            <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">action</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Skt</td>
                            <td colSpan={2}>Larry the Bird</td>
                            
                            </tr>
                            </tbody>
                            </table>

                  </div>
           </div>
    </div>
  </div>;
}

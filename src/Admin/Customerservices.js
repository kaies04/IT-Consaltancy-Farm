import React, { useEffect, useState } from 'react';
import axios from "../Admin/components/axios";
import Adminlayout from '../Layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Customerservices() {
  const [list,setList]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const handleClose = () => {
    setShow(false)
  };
  
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`customerservices/list.php`)
    
    setList(res.data);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
      name:e.target.name.value,
      email:e.target.email.value,
      services:e.target.services.value,
      msg:e.target.msg.value,
      id:inputs.id
    }
   
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url=`customerservices/update.php`;
      
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`customerservices/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Appointment</h1>
        
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th> Name</th>
            <th>Email</th>
            <th>message</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.msg}</td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
               <div className='form-group'>
                  <label htmlFor='g_name'> Name</label>
                  <input type='text' defaultValue={inputs.g_name} className='form-control' name="name" id='name'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='g_email'> Email</label>
                  <input type='text' defaultValue={inputs.g_email} className='form-control' name="email" id='email'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='msg'>Message</label>
                  <textarea defaultValue={inputs.msg} className='form-control' name="msg" id='msg'></textarea>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Customerservices;

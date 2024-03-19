import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addToCategory } from '../services/allAPI';

function Category() {
  const [categoryName,setcategoryName] = useState({})
   
const [allCategory,setAllCategory] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function to add category

  const handleAddCatergory = async()=>{
      console.log(categoryName);
      if(categoryName){
        let body = {
          categoryName,
        allVideos: []
        }
          // make api call
         
          const response = await addToCategory(body)
          console.log(response);
          if(response.status>=200 && response.status<300){
            alert('category successfully added')
            // to  make the state null after successfull addition
            setcategoryName("")
            // to close modal 
            handleClose()
          }
          else{
            console.log(response);
            alert('something went wrong.please try again later')
          }
      }
      else{
        alert('please fill the category name')
      }

  }
  // function to get all category 
  //  const getCategory = async ()=>{
  //   const {data} = await  getAllCategory()
  //   // console.log(data);
  //   setAllCategory(data)
  //  }
  //  console.log(allCategory);

  //  useEffect(()=>{
  //   getCategory()
  //  },[])

  return (
    <>
    <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>add new category</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil"></i> add new</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>category name</Form.Label>
        <Form.Control  type="text" placeholder="Enter category name" onChange={(e)=>setCategory(e.target.value)} />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel 
          </Button>
          <Button onClick={handleAddCatergory} variant="primary" >
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
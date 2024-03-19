import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllvideo } from '../services/allAPI';



function Add( setUploadVideoStatus) {

    const[video,setVideo]=useState({
      "id":"",
      "caption":"",
      "url":"",
      "embedLink":""
    })
    console.log(video);
 
    const embedVideoLink =(e)=>{
      const {value}=e.target
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }

    
    const handleUpload= async()=>{
      const{id,caption,url,embedLink}=video
      if(!id ||!caption||!url||!embedLink){
        alert('please fill the form completely')
      }
      else{
        const response = await uploadAllvideo(video)
        console.log(response);
        if(response.status>=200 && response.status<300){
          alert(`${response.data.caption}is successfully uploaded`)

           //to change the value of uploadVideoStatus  
           setUploadVideoStatus(response.data)

           //making the state value none
           setVideo({
            id:"",
            caption:"",
            url:"",
            embedLink:"",
           })

          //to close the modal
          handleClose()
        }
        else{
          alert('something went wrong try again later')
          console.log(response);
        }
      }
    }

    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
<div className='d-flex align-items-center'>
<h5>upload a new video</h5>
<button onClick={handleShow} className='btn '><i class="fa-solid fa-cloud-arrow-up"></i></button>
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film"></i>upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill the following details</p>
         <form className='border border-secondary-rounded p-3'>

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter category ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter category name"  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video image url" onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter youtube video link" onChange={embedVideoLink} />
      </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
</>    
  )
}

export default Add


// <iframe width="853" height="480" src="https://www.youtube.com/embed/m_gdEzlxKsg?list=RDm_gdEzlxKsg" title="JAILER -Rathamaarey Lyric Video| Superstar Rajinikanth| Sun Pictures| Anirudh| Nelson| Vishal Mishra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

// <iframe width="853" height="480" src="https://www.youtube.com/embed/m_gdEzlxKsg?list=RDm_gdEzlxKsg" title="JAILER -Rathamaarey Lyric Video| Superstar Rajinikanth| Sun Pictures| Anirudh| Nelson| Vishal Mishra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideos } from '../services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{

    setShow(true);

   const {caption,embedLink} = displayVideo
   const today = new Date
  //  console.log(today);
  let timeStamp = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
  }).format(today)
  console.log(timeStamp);

let videoDetails = {
  caption,
  embedLink,
  timeStamp
}
await addToHistory(videoDetails)
  }
   

 const removeVideo = async(id)=>{
 const response =   await deleteVideos(id)
 console.log(response);
 setDeleteVideoStatus(true)
 }

  return (
    <>

    <Card style={{ width: '100%',height:'350px' }} >
    <Card.Img height={'250px'} onClick={handleShow} variant="top" src={displayVideo.url} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
      </Card.Title>
      <div className='d-flex justify-content-between'>
      <h6>{displayVideo.caption}</h6>
      <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash" style={{color:"#fbfcfe"}}></i></Button>
      </div>
    </Card.Body>
  </Card>

  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523" src={`${displayVideo.embedLink}?autoplay=1`} title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>

   

    </>
  )
}

export default VideoCard


// modal aaki embed link kodkka
// ayle src il {displayVideo.embedlink} title{displayVideo.caption}

// allowFullScreen
// modal il  tilte il display video.caption 

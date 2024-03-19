import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigatebyUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-evenly align-item-center w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3>welcome to <span className='text-warning'>media player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque minima iusto adipisci tempora praesentium quisquam possimus nisi! Iste ratione repudiandae perferendis atque earum voluptate, distinctio consequuntur aspernatur repellendus cumque!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis labore sed nemo magni officiis molestias? Ad cupiditate dicta ipsa illo quae laboriosam, repudiandae earum commodi voluptatibus expedita vel aliquam! </p>
        <button onClick={()=>navigatebyUrl('/home1')} className='btn btn-warning mt-5'>get started<i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no img" />
      </Col>

    </Row>
    <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
      <h1>Features </h1>
<div className="card mt-5 mb-5 d-flex align-items-center justify-content-between w-100" >
<Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
    </div>
    <div className="container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between">
    <Row >
   <Col lg={5}> 
   <h3 className='text-warning md-5'> simple fast and powerfull</h3>
   <h6 className='mb-3'><span className='fw-bolder fs-5'>playeverything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla harum illum quas cupiditate, nemo voluptatibus nobis minima praesentium vitae quidem numquam quo asperiores vero deleniti explicabo amet similique iste?</h6>

   <h6 className='mb-3'><span className='fw-bolder fs-5'>playeverything</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla harum illum quas cupiditate, nemo voluptatibus nobis minima praesentium vitae quidem numquam quo asperiores vero deleniti explicabo amet similique iste?</h6>

   <h6 className='mb-3'><span className='fw-bolder fs-5'>playeverything</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla harum illum quas cupiditate, nemo voluptatibus nobis minima praesentium vitae quidem numquam quo asperiores vero deleniti explicabo amet similique iste?</h6>
   </Col>
   <Col></Col>
   <Col lg={6}>
   <iframe width="100%" height="400" src="https://www.youtube.com/embed/m_gdEzlxKsg?list=RDm_gdEzlxKsg" title="JAILER -Rathamaarey Lyric Video| Superstar Rajinikanth| Sun Pictures| Anirudh| Nelson| Vishal Mishra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </Col>

      </Row>     

    </div>
    </>
  )
}

export default Landingpage
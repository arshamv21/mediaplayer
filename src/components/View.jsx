import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { useEffect, useState } from 'react'
import { getAllVideos } from '../services/allAPI'

function View(uploadVideoStatus) {

  const [allvideo,setAllVideo] = useState([])

   const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)


  const getAllUploadedVideo = async()=>{
    const response = await getAllVideos()
    const{data} = response
    setAllVideo(data)
   }

   useEffect(()=>{
    getAllUploadedVideo()
    setDeleteVideoStatus(false)
   },[uploadVideoStatus,deleteVideoStatus])
     
  return (
    <>
    <Row>
      {allvideo.length>0?

     allvideo?.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayVideo = {video} setDeleteVideoStatus = {setDeleteVideoStatus} />
  </Col>))
 :
       <p>nothing to display</p>

     
      }
        
    </Row>

    </>
  )
}

export default View
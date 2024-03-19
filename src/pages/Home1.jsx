import React, { useState } from 'react'
import Add from '../components/Add'
import { Link, useSearchParams } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home1() {
  //create state to do state lifting
  const [uploadVideoStatus , setUploadVideoStatus] = useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='"add-vedios'>
        <Add  setUploadVideoStatus = { setUploadVideoStatus} />
      </div>
      <Link to={'/watchhistory'} style={{ textDecoration: 'none', color: 'white' }}>watchhistory

      </Link>
    </div>
    <div className='container-fluid mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-vedios col-lg-9'>
        <h4 className='mb-5'>all videos</h4>
<View uploadVideoStatus ={uploadVideoStatus}/>
      </div>
      <div className='category col-lg-3'>
        <Category/>
      </div>

    </div>

    </>




  )
}

export default Home1
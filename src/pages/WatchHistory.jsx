import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';


function WatchHistory() {

  const [history,setHistory] = useState([])

const getHistory = async()=>{
  const {data} = await getAllHistory()
  // console.log(data);
  setHistory(data)
}
console.log(history);
// function to delete history
const handleDelete = async(id)=>{
  await deleteHistory(id)
  getHistory()
}

useEffect(()=>{
  getHistory()
},[])


  return (
   <>
    <div className='mb-4 p-5 ms-5'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>
        <i class="fa-solid fa-arrow-left me-2"></i>
        Back to Home
      </Link>

    <Table responsive className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          { history.length>0?
          history.map((item)=>(<tr>
            <td>{item.id}1</td>
            <td>{item.caption}Kanban</td>
            <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
            <td>{item.timeStamp}4/10/23</td>
            <td>      <Button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash" style={{color:"#fbfcfe"}}></i></Button>
</td>

          </tr>))
          :
          <p>nothing to display</p>
          }
        </tbody>


    </Table>

    </div>
  
   </>
  )
}

export default WatchHistory
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() { 
  return (
    <>
 <div style={{width:'100%',height:'300px'}} className='d-flex align-items-evently justify-content-center flex-column'>
<div className='footer d-flex align-items-center justify-content-evently'>
  <div className="website" style={{width:'400px'}}>
    <h4>  <i class="fa-solid fa-video fa-beat text-warning"></i>
           {' '}
            Video Player </h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse autem inventore nobis atque aut, alias optio quas rerum dignissimos tenetur est consequatur fuga eaque? Doloremque adipisci incidunt delectus maiores?</h6>
  </div>
  <div className="link d-flex flex-column">
    <h4>links</h4>
    <Link to={''} style={{textDecoration:'none',color:'white'}}>landing page </Link>
    <Link to={'/home1'} style={{textDecoration:'none',color:'white'}}>home page</Link>
    <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}>watch history </Link>

  </div>
  <div className="guids d-flex flex-column ">
    <h4>guids</h4>
  
    <Link to={''} style={{textDecoration:'none',color:'white'}}>landin page </Link>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>react bootstrap </Link>
    <Link to={''} style={{textDecoration:'none',color:'white'}}>bootswatch </Link>


  </div>
 
  <div className="contacts">
    <h4>contact us</h4>
    <div className='d-flex'>
      <input placeholder='enter the email id ' className='form control w-75' type="text" />
       <button className='btn bg-warning' style={{color:'white',marginLeft:"3%"}}>subsribe</button>
    </div>
    <div className='d-flex' style={{marginTop:"20px",width:"100%", justifyContent:"space-evenly"}}>
        <Link>    <i style={{textDecoration:'none',color:'white'}} class="fa-brands fa-instagram"></i>
</Link>
<Link>    <i style={{textDecoration:'none',color:'white'}} class="fa-brands fa-twitter"></i>
</Link>
<Link>    <i style={{textDecoration:'none',color:'white'}} class="fa-brands fa-linkedin"></i>
</Link>
<Link>    <i style={{textDecoration:'none',color:'white'}} class="fa-brands fa-facebook"></i>
</Link>

    </div>
  </div>
 
 
</div>
<p>copyright @ 2023 media player</p>
    </div>

    </>
   
  )
}

export default Footer
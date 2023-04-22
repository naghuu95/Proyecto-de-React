import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/rayo.png"
import "./navBar.css"
import { Col, Row } from "react-bootstrap"

const NavBar =()=>{
    return(
        <nav className=" container">
         <Row>
          <Col md={10}>
          <Link to='/' className="link-logo p-5 mt-3 ">
            <h2 className="logo ">FLUX</h2>
          </Link>
          </Col >

          <Col className=" d-flex justify-content-center aling-item-center" md={2}>
          <CartWidget/>
          </Col>



         </Row>
          

          <div className=" d-flex justify-content-around py-5 mb-4" >
            <NavLink to ={'/categoria/remeras'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Remeras</NavLink>
            <NavLink to ={'/categoria/shorts'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Shorts</NavLink>
            <NavLink to ={'/categoria/musculosas'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Musculosas</NavLink>
            
          </div>
  

        
        </nav>
      

       
      


    )
}

export default NavBar
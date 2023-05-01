import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/rayo.png"
import "./navBar.css"
import { Col, Row } from "react-bootstrap"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"

const NavBar =()=>{
    return(

      <Navbar bg="dark" className="" expand="lg">
      <Container className=" bg-primary d-flex  justify-content-around">
        <Navbar.Brand href="#home">
        <Link to='/' className="link-logo  bg-primary  ">
            <h2 className="logo bg-warning">FLUX</h2>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <NavLink to ={'/categoria/remeras'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Remeras</NavLink>
            <NavLink to ={'/categoria/shorts'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Shorts</NavLink>
            <NavLink to ={'/categoria/musculosas'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Musculosas</NavLink>
            <Link className="link" to='/cart'><CartWidget /> </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





        /*<nav className=" container-fluid">
         <Row className="barra">

          <Col md={3}>
          <Link to='/' className="link-logo  bg-primary  ">
            <h2 className="logo bg-warning">FLUX</h2>
          </Link>
          </Col >

          <Col md={6} className="bg-primary">
          <div className=" d-flex justify-content-around " >
            <NavLink to ={'/categoria/remeras'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Remeras</NavLink>
            <NavLink to ={'/categoria/shorts'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Shorts</NavLink>
            <NavLink to ={'/categoria/musculosas'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Musculosas</NavLink>
            
          </div>
          </Col>

          <Col className="  bg-dark" md={1}>
          <CartWidget/>
          </Col>



         </Row>
          

          
  

        
        </nav>/*/
      

       
      


    )
}

export default NavBar
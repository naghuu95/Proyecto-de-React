import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import "./navBar.css"
import { Col, Row } from "react-bootstrap"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import { Envio } from "../Envio/Envio"


const NavBar =()=>{
    return(



      <div className="header">

        <Envio />

      <Navbar  variant="dark" className="container-fluid header d-flex justify-content-around  "  expand="lg">
      
         
          <Navbar.Brand href="#home " className=" col-sm-1 col-md-3 navbar ">
          <Link to='/' className="link-logo    ">

            <h2 className="logo ps-3 ps-md-5 "> FLUX</h2>
          </Link>
          </Navbar.Brand>
          <Link className="link d-block d-md-none col-1 " to='/cart'><CartWidget /> </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav " className=" hamburguesa" />

        <Navbar.Collapse id="basic-navbar-nav" className="  ">

          <Nav className="  col-12 col-md-11  d-flex justify-content-evenly align-items-center py-3 py-md-0 "  >
           <NavLink to ={'/'} className={({isActive})=>isActive? 'ActiveOption my-link ' : 'Option my-link'}>Inicio</NavLink>
             <NavDropdown title="Categorias"  id="basic-nav-dropdown">
             <Link to={'/categoria/remeras'}class="text-decoration-none "> <NavDropdown.Item className="categorias " href="#action/3.1">Remeras</NavDropdown.Item></Link>
             <Link to={'/categoria/musculosas'}class="text-decoration-none" ><NavDropdown.Item className="categorias" href="#action/3.2">Musculosas</NavDropdown.Item></Link>
             <Link to={'/categoria/shorts'}class="text-decoration-none" > <NavDropdown.Item className="categorias" href="#action/3.3">Shorts</NavDropdown.Item> </Link>
            </NavDropdown>
            <NavLink to ={'/nosotros'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Nosotros</NavLink>
          </Nav>

          <Link className="link d-none d-md-block  col-1 " to='/cart'><CartWidget /> </Link>
        </Navbar.Collapse>
       
      </Navbar>

      </div>
      



      

    


/*<li class="nav-item dropdown">

     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >
            Categorias
     </a>

    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
       <a class="dropdown-item" href="#">Remeras</a>
      </li>

      <li>
        <a class="dropdown-item" href="#">Musculosas</a>
      </li>
    
      <li>
        <a class="dropdown-item" href="#">Shorts</a>
      </li>
   </ul>

  </li>*/


     




        
      

       
      


    )
}

export default NavBar
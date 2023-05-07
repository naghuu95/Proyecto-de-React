import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import "./navBar.css"
import { Col, Row } from "react-bootstrap"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"

const NavBar =()=>{
    return(
      

    <Navbar  className="container-fluid  d-flex justify-content-center " id="fixed" expand="lg">
      
      <div className="  container-fluid row ">
        <Navbar.Brand href="#home " className="col-4 navbar">
        <Link to='/' className="link-logo    ">
         
            <h2 className="logo ps-5 "> FLUX</h2>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />

        <Navbar.Collapse id="basic-navbar-nav  ">

          <Nav className="  col-7 d-flex justify-content-evenly align-items-center " >
           <NavLink to ={'/'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Inicio</NavLink>
             <NavDropdown title="Categorias"  id="basic-nav-dropdown">
             <Link to={'/categoria/remeras'}class="text-decoration-none"> <NavDropdown.Item className="categorias" href="#action/3.1">Remeras</NavDropdown.Item></Link>
             <Link to={'/categoria/musculosas'}class="text-decoration-none" ><NavDropdown.Item className="categorias" href="#action/3.2">Musculosas</NavDropdown.Item></Link>
             <Link to={'/categoria/shorts'}class="text-decoration-none" > <NavDropdown.Item className="categorias" href="#action/3.3">Shorts</NavDropdown.Item> </Link>
            </NavDropdown>
            <NavLink to ={'/nosotros'} className={({isActive})=>isActive? 'ActiveOption my-link' : 'Option my-link'}>Nosotros</NavLink>
          </Nav>

          <Link className="link  col-1 " to='/cart'><CartWidget /> </Link>
        </Navbar.Collapse>
       
      </div>
      
    </Navbar>



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
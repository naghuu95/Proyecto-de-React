import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/rayo.png"
import "./navBar.css"

const NavBar =()=>{
    return(
        <nav class="navbar navbar-expand-lg header navbar-light py-5">
  <div class="container-fluid">
    <img src={logo} class="logo" alt= "logo de rayo"/>
    <a class="navbar-brand fs-1 px-2" href="#">FLUX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav fs-4">
        <li class="nav-item mx-5">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link" href="#">Nosotros</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        
      </ul>
    </div>
  </div>

  <CartWidget/>
</nav>
      

       
      


    )
}

export default NavBar
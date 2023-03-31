import { CartWidget } from "../CartWidget/CartWidget"

const NavBar =()=>{
    return(
        <nav>
            <h3>Flux</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
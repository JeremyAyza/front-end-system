import { Link } from "react-router-dom";

export default function ComponenteNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>CYBER SISTEM JCUBA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/usuario/listar"}>Usuarios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/producto/listar"} >Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/proveedor/listar"} >Proveedores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/cliente/listar"} >Clientes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/venta/nuevaventa"} >Nueva Venta</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/venta/ventas"} >Ventas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}


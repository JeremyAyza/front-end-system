export default function ComponenteNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CYBER SISTEM JCUBA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/usuario/listar">Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/producto/listar" >Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/proveedor/listar" >Proveedores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/cliente/listar" >Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/venta/nuevaventa" >Nueva Venta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/venta/ventas" >Ventas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}


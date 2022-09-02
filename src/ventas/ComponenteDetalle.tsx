import ComponenteListTableHeadDetalle from "../utilidades/Listar/ComponenteListTableHeadDetalle";
import ComponenteListTableRowDetalle from "../utilidades/Listar/ComponenteListTableRowDetalle";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteDetalle(){
    return(
        <>
        <ComponenteNav></ComponenteNav>
        <div className="container py-4">
            <div className="card">
                <div className="card-header text-white bg-primary">Detalle de la venta</div>
                <div className="card-body">                   
                    <button className="btn btn btn-outline-success px-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        </svg>
                    </button>
                    <ul className="list-group my-2">
					    <li className="list-group-item list-group-item-primary">Datos del Cliente</li>
					    <li className="list-group-item"><strong>Nombres(s):</strong> José Martines Rodriguez</li>
					    <li className="list-group-item"><strong>DNI:</strong> 64531245</li>
					    <li className="list-group-item"><strong>Télefono:</strong> 984563123</li>
                        <li className="list-group-item"><strong>Dirección:</strong> Lima-SJL</li>
			        </ul>

                    <ul className="list-group">
                        <li className="list-group-item list-group-item-success">Datos de la Factura</li>
                        <li className="list-group-item"><strong>Número de Venta:</strong> 1</li>
                        <li className="list-group-item"><strong>Fecha:</strong> 20/08/2022</li>
                    </ul>
                    <div className="table-responsive py-4">
              <table className="table table-striped">
                <ComponenteListTableHeadDetalle lista={["Producto","Precio","Cantidad","Total"]}></ComponenteListTableHeadDetalle>
                <tbody>
                    <ComponenteListTableRowDetalle datos={["GTX 1060","1000.00","5","5000.00"]}></ComponenteListTableRowDetalle>
                    <ComponenteListTableRowDetalle datos={["Placa madre","120.00", "10", "1200.00"]}></ComponenteListTableRowDetalle>
                    <ComponenteListTableRowDetalle datos={["Memoria Ram","200.00", "7", "1400.00"]}></ComponenteListTableRowDetalle>
                </tbody>
              </table>
              <div className="form-group p-2 text-center">
                <div className="d-flex justify-content-end p-2">
                    <label className="my-auto px-3">Total:</label>
                    <input className="" type="text" disabled  value="S/.7600.00"/>
                </div>
              </div>
            </div>
                </div>
            </div>
        </div>
        </>
    );
}
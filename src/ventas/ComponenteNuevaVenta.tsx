import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
import ComponenteListTableHeadVenta from "../utilidades/Listar/ComponenteListTableHeadVenta";

import ComponenteListTableRowVenta from "../utilidades/Listar/ComponenteListTableRowVenta";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";
export default function ComponenteNuevaVenta() {
  return (
    <>        
      <ComponenteNav></ComponenteNav>
      
      <div className="container p-3 border mt-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <h4 className="text-center">Nueva Venta</h4>
            </div>
            <div className="card">
              <div className="card-body">
                <form>
                  <input type="hidden" name="action" value="addCliente" />
                  <input
                    type="hidden"
                    id="idcliente"
                    value="1"
                    name="idcliente"
                    required
                  />
                  <div className="row">
                    <div className="col-lg-4">
                      <ComponenteFormGroup
                        entidad="cliente"
                        valor="DNI"
                        type="text"
                      ></ComponenteFormGroup>
                    </div>
                    <div className="col-lg-4">
                      <ComponenteFormGroup
                        entidad="producto"
                        valor="Codigo"
                        type="text"
                      ></ComponenteFormGroup>
                    </div>
                    <div className="col-lg-4">
                      <ComponenteFormGroup
                        entidad="producto"
                        valor="Cantidad"
                        type="number"
                      ></ComponenteFormGroup>
                    </div>
                    <div className="col-lg-4 px-4">
                      <button className="btn btn-success " style={{ maxWidth:"200px"}} >Añadir a la Lista
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill m-1" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                          </svg>
                        </span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
            <div className="table-responsive py-4">
              <table className="table table-striped">
                <ComponenteListTableHeadVenta
                  lista={["ID","Codigo", "Producto", "P/U","Cantidad", "Subtotal"]}
                ></ComponenteListTableHeadVenta>
                <tbody>
                  <ComponenteListTableRowVenta
                    datos={["1","P03", "GTX 1060","150.00", "5", "5000.00"]}
                  ></ComponenteListTableRowVenta>
                  <ComponenteListTableRowVenta
                    datos={["2","A15", "Placa madre","120.00", "10", "1200.00"]}
                  ></ComponenteListTableRowVenta>
                  <ComponenteListTableRowVenta
                    datos={["3","C03", "Memoria Ram","200.00", "7", "1400.00"]}
                  ></ComponenteListTableRowVenta>
                </tbody>
              </table>
            </div>
            <div className="form-group p-2 text-center">
              <div className="d-flex justify-content-end p-2">
                <label className="my-auto px-3">Total:</label>
                <input className="" type="text" disabled  value="7600.00"/>
              </div>


              <a href="/" className="btn btn btn-outline-success px-2 m-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-receipt" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
                Generar Venta
              </a>

              <a href="/" className="btn btn btn-outline-danger px-2 m-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                Cancelar Venta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

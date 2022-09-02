import ComponenteListHeader from "../utilidades/Listar/ComponenteListHeader"
import ComponenteListTableHead from "../utilidades/Listar/ComponenteListTableHead";
import ComponenteListTableRow from "../utilidades/Listar/ComponenteListTableRow";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteListarProducto() {
  return (
    <><ComponenteNav/>
    <div className="container p-3 border mt-2">
      
      <ComponenteListHeader rutaReg="/producto/registrar" entidad="producto"></ComponenteListHeader>
      <div className="table-responsive py-4">
        <table className="table table-striped">
          <ComponenteListTableHead lista={["ID","Codigo","Nombre","Stock","Precio","Provedor","F.Creación"]} ></ComponenteListTableHead>
          <tbody>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["1","P001","GTX 1060","15","1000.00","Ciclope","18/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["2","P002","Placa madre","10","700.00","Ciclope","19/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["3","P003","Memoria Ram","20","200.00","Ciclope","20/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["4","P004","Sistema de refrigeración","5","700.00","Ciclope","21/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["5","P005","Placa base ","5","600.00","Ciclope","22/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/producto/actualizar" datos={["6","P006","Tarjeta de red","16","90.00","Ciclope","23/08/2022"]} ></ComponenteListTableRow>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

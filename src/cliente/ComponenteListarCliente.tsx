import ComponenteListHeader from "../utilidades/Listar/ComponenteListHeader"
import ComponenteListTableHead from "../utilidades/Listar/ComponenteListTableHead";
import ComponenteListTableRow from "../utilidades/Listar/ComponenteListTableRow";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteListarCliente() {
  return (


    <>
    <ComponenteNav></ComponenteNav>
    <div className="container p-3 border mt-2">
      
      <ComponenteListHeader rutaReg="/cliente/registrar" entidad="cliente"></ComponenteListHeader>
      <div className="table-responsive py-4">
        <table className="table table-striped">
          <ComponenteListTableHead lista={["ID","DNI","Nombre","Télefono", "Dirección", "Razón", "F.Creación"]} ></ComponenteListTableHead>
          <tbody>
            <ComponenteListTableRow ruta="/cliente/actualizar" datos={["1","64531245","José Martines Rodriguez","984563123","Lima-SJL","Venta","19/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/cliente/actualizar" datos={["2","50714479","Joshua ramirez porras","956786932","Lima-SMP","Venta","19/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/cliente/actualizar" datos={["3","24657645","Ulises Cabanillas meza","976734564","Lima-SJM","Venta","20/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/cliente/actualizar" datos={["4","65886234","Valery Castillo Bermudez","936334564","Lima-SJM","Venta","22/08/2022"]} ></ComponenteListTableRow>
            <ComponenteListTableRow ruta="/cliente/actualizar" datos={["5","75967723","Angel Nieto Guerra","970734216","Lima-ATE","Venta","23/08/2022"]} ></ComponenteListTableRow>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

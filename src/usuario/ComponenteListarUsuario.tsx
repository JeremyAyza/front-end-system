import ComponenteListHeader from "../utilidades/Listar/ComponenteListHeader"
import ComponenteListTableHead from "../utilidades/Listar/ComponenteListTableHead";
import ComponenteListTableRow from "../utilidades/Listar/ComponenteListTableRow";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteListarUsuario() {
  return (
    <>
      <ComponenteNav/>
      <div className="container border p-3 border mt-2">
        <ComponenteListHeader rutaReg="/usuario/registrar" entidad="usuario"></ComponenteListHeader>
        <div className="table-responsive py-4">
          <table className="table table-striped">
            <ComponenteListTableHead lista={["ID","Correo","Contraseña"]} ></ComponenteListTableHead>
            <tbody>
              <ComponenteListTableRow ruta="/usuario/actualizar" datos={["1","Example@Gmail.com","aAsd0212"]} ></ComponenteListTableRow>
              <ComponenteListTableRow ruta="/usuario/actualizar" datos={["2","Ple@Gmail.com","bBsd0212"]} ></ComponenteListTableRow>
              <ComponenteListTableRow ruta="/usuario/actualizar" datos={["3","Exam@Gmail.com","bBsd0212"]} ></ComponenteListTableRow>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

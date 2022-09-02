import ComponenteListHeader from "../utilidades/Listar/ComponenteListHeader";
import ComponenteListTableHead from "../utilidades/Listar/ComponenteListTableHead";
import ComponenteListTableRow from "../utilidades/Listar/ComponenteListTableRow";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteListarProveedor() {
  return (
    <><ComponenteNav></ComponenteNav>
    <div className="container p-3 border mt-2">
      <ComponenteListHeader
        rutaReg="/proveedor/registrar"
        entidad="proveedor"
      ></ComponenteListHeader>
      <div className="table-responsive py-4">
        <table className="table table-striped">
          <ComponenteListTableHead
            lista={[
              "ID",
              "Ruc",
              "Nombre",
              "Télefono",
              "Dirección",
              "Razón",
              "F.Creación",
            ]}
          ></ComponenteListTableHead>
          <tbody>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "1",
                "20600216512",
                "Hp",
                "984563124",
                "Lima-Perú",
                "Hp Perú",
                "18/08/2022",
              ]}
            ></ComponenteListTableRow>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "2",
                "20600211311",
                "Lenovo",
                "954461284",
                "Lima-Perú",
                "Lenovo Perú",
                "19/08/2022",
              ]}
            ></ComponenteListTableRow>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "3",
                "20600225831",
                "Asus",
                "944565114",
                "Lima-Perú",
                "Asus Perú",
                "20/08/2022",
              ]}
            ></ComponenteListTableRow>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "4",
                "20700416512",
                "Dell",
                "988560119",
                "Lima-Perú",
                "Dell Perú",
                "21/08/2022",
              ]}
            ></ComponenteListTableRow>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "5",
                "20700224132",
                "Epson",
                "960531240",
                "Lima-Perú",
                "Epson Perú",
                "22/08/2022",
              ]}
            ></ComponenteListTableRow>
            <ComponenteListTableRow
              ruta="/proveedor/actualizar"
              datos={[
                "6",
                "20700732329",
                "Acer",
                "956732650",
                "Lima-Perú",
                "Acer Perú",
                "23/08/2022",
              ]}
            ></ComponenteListTableRow>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

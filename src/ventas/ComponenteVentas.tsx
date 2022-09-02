import ComponenteListHeader from "../utilidades/Listar/ComponenteListHeader";
import ComponenteListTableHeadVenta from "../utilidades/Listar/ComponenteListTableHeadVenta";
import ComponenteListTableRowVentasD from "../utilidades/Listar/ComponenteListTableRowVentasD";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteVentas() {
  return (
    <div>
            
      <ComponenteNav></ComponenteNav>
      <div className="container p-3 border mt-2">
        <ComponenteListHeader
          rutaReg="/venta/nuevaventa"
          entidad="venta"
        ></ComponenteListHeader>
        <div className="table-responsive py-4">
          <table className="table table-striped">
            <ComponenteListTableHeadVenta
              lista={["ID", "Cliente", "Total", "F.Creacion"]}
            ></ComponenteListTableHeadVenta>
            <tbody>
              <ComponenteListTableRowVentasD
                ruta="/venta/detalle"
                datos={[
                  "1",
                  "José Martines Rodriguez",
                  "1500.00",
                  "20/08/2022",
                ]}
              ></ComponenteListTableRowVentasD>
              <ComponenteListTableRowVentasD
                ruta="/venta/detalle"
                datos={[
                  "2",
                  "Valery Castillo Bermudez",
                  "500.00",
                  "20/08/2022",
                ]}
              ></ComponenteListTableRowVentasD>
              <ComponenteListTableRowVentasD
                ruta="/venta/detalle"
                datos={["3", "Angel Nieto Guerra", "3500.00", "20/08/2022"]}
              ></ComponenteListTableRowVentasD>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

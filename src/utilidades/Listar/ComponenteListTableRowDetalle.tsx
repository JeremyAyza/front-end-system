export default function ComponenteListTableRowDetalle(props: datoList) {
    return (
      <tr>
        {
        props.datos.map((valor: any) => {
          return <td className="text-center" key={valor}>{valor}</td>;
        })
        }
      </tr>
    );
  }
  
  interface datoList {
    datos: any;
  }
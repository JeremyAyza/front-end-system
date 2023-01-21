import {BsPen,BsTrashFill} from "react-icons/bs";

export default function ComponenteListTableRow(props: datoList) {




	return (

		<tr>
			{
				props.datos.map((valor: any) => { return <td className="text-center" key={Math.random()*100}>{valor}</td> })
			}
			<td>
				<a href={props.ruta} className="btn btn btn-outline-warning px-2 " >
					<BsPen></BsPen> Actualizar
				</a>
			</td>
			<td>
				<div className="btn btn btn-outline-danger px-2" >
					<BsTrashFill></BsTrashFill>
					 Eliminar
				</div>
			</td>
		</tr>



	)
}

interface datoList {
	datos?: any,
	ruta:string
}


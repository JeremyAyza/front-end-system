export default function ComponenteFormHeader(props: datoForm) {
	return (
		<>
			<h3 className="text-dark  border-3 border-dark text-decoration-underline my-3 px-2">{props.caso + " " + props.entidad + ":"}</h3>
			<div className="form-group p-2">
				<h5>Ingrese los datos del <strong>{props.entidad}</strong>.</h5>
			</div>
		</>

	)
}


interface datoForm {
	caso: string,
	entidad: string
}
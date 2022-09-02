export default function ComponenteFormGroup(props:datoForm) {
  return (
    <div className="form-group p-2">
      <label>{`${props.valor} del ${props.entidad}`}</label>
      <div>
        <input className="form-control" type={props.type} placeholder={`Ingrese ${props.valor}:`} />
      </div>
    </div>

  )
}

interface datoForm{
  valor:string,
  type:string,
  entidad:string
}
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function ComponenteFormBtn(props: datoForm) {
    return (
        <div className="form-group p-3 text-center">
        <a href={props.ruta} className="btn btn-success " style={{ maxWidth:"200px"}} >Enviar Formulario
            <span>
                <BsFillArrowRightCircleFill className="m-1"></BsFillArrowRightCircleFill>
            </span>
        </a>
        </div>
    )
}

interface datoForm {
  ruta: string,
    
}
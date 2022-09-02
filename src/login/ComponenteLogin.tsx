import "../css/login.css";
import ComponenteFormBtn from "../utilidades/Formulario/ComponenteFormBtn";
import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
export default function ComponenteLogin(){
    return(
        <div className="container py-3">
            <main className="form-signin w-100 m-auto text-center pt-3 m5">
            <form>
                <img className="mb-4 bg-primary rounded-circle" src={require("../img/2.png")} alt="" style={{maxWidth:"200px", maxHeight:"200px"}} />
                <h1 className="h2 mb-3 font-weight-normal">Sistema de Ventas JCUBA</h1>                    
                <ComponenteFormGroup valor="Correo" type="text" entidad="usuario"></ComponenteFormGroup>
                <ComponenteFormGroup valor="Contraseña" type="password" entidad="usuario"></ComponenteFormGroup>

                <ComponenteFormBtn ruta="/usuario/listar" /> 

                <p className="my-1  text-dark">&copy;  2022 - JCUBA</p>
            </form>
            </main>

        </div>
        
    );
}
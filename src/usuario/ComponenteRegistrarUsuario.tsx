import ComponenteFormBtn from "../utilidades/Formulario/ComponenteFormBtn";
import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
import ComponenteFormHead from "../utilidades/Formulario/ComponenteFormHeader";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteRegistrarUsuario() {
  return (
    <>
    <ComponenteNav/>
    <div className="container border my-3 py-2 mt-2">
      <ComponenteFormHead caso="Registro" entidad="usuario"></ComponenteFormHead>
      <form>

        <ComponenteFormGroup valor="Correo" type="email" entidad="usuario"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Contraseña" type="password" entidad="usuario"></ComponenteFormGroup>
        <ComponenteFormBtn ruta="/usuario/listar" />
      </form>
    </div>
    </>
  );
}
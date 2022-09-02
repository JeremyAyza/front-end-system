import ComponenteFormBtn from "../utilidades/Formulario/ComponenteFormBtn";
import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
import ComponenteFormHead from "../utilidades/Formulario/ComponenteFormHeader";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteRegistrarCliente() {
  return (
    <>
    <ComponenteNav></ComponenteNav>
    <div className="container border my-3 py-2 mt-2">
      <ComponenteFormHead caso="Registro" entidad="cliente"></ComponenteFormHead>
      <form>

        <ComponenteFormGroup valor="DNI" type="text"  entidad="cliente" ></ComponenteFormGroup>
        <ComponenteFormGroup valor="Nombre" type="text" entidad="cliente"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Telefono" type="text" entidad="cliente"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Dirección" type="text" entidad="cliente"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Razón" type="text" entidad="cliente"></ComponenteFormGroup>


        <ComponenteFormBtn ruta="/cliente/listar" />
      </form>
    </div>
    
    </>
  );
}
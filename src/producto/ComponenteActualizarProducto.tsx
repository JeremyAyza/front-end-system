import ComponenteFormBtn from "../utilidades/Formulario/ComponenteFormBtn";
import ComponenteFormCombo from "../utilidades/Formulario/ComponenteFormCombo";
import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
import ComponenteFormHead from "../utilidades/Formulario/ComponenteFormHeader";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteActualizarUsuario() {
  return (
    <>
    <ComponenteNav/>
    <div className="container border my-3 mt-2">
      <ComponenteFormHead caso="Actualizar" entidad="producto"></ComponenteFormHead>
      <form>

      <ComponenteFormGroup valor="Codigo" type="text"  entidad="producto"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Nombre" type="text" entidad="producto"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Stock" type="number" entidad="producto"></ComponenteFormGroup>
        <ComponenteFormGroup valor="Precio" type="number" entidad="producto"></ComponenteFormGroup>
        <ComponenteFormCombo></ComponenteFormCombo>
        <ComponenteFormBtn ruta="/producto/listar" />
      </form>
    </div>
    </>
  );
}
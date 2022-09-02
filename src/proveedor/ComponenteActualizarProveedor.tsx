import ComponenteFormBtn from "../utilidades/Formulario/ComponenteFormBtn";
import ComponenteFormGroup from "../utilidades/Formulario/ComponenteFormGroup";
import ComponenteFormHead from "../utilidades/Formulario/ComponenteFormHeader";
import ComponenteNav from "../utilidades/Nav/ComponenteNav";

export default function ComponenteActualizarProveedor(){
    return(
      <>       
      <ComponenteNav></ComponenteNav>
      
      <div className="container border my-3 py-2 mt-2">
        <ComponenteFormHead caso="Actualizar" entidad="proveedor"></ComponenteFormHead>
        <form>
          <ComponenteFormGroup valor="Ruc" type="text"  entidad="proveedor" ></ComponenteFormGroup>
          <ComponenteFormGroup valor="Nombre" type="text" entidad="proveedor"></ComponenteFormGroup>
          <ComponenteFormGroup valor="Télefono" type="text" entidad="proveedor"></ComponenteFormGroup>
          <ComponenteFormGroup valor="Dirección" type="text" entidad="proveedor"></ComponenteFormGroup>
          <ComponenteFormGroup valor="Razón" type="text" entidad="proveedor"></ComponenteFormGroup>
          <ComponenteFormBtn ruta="/proveedor/listar" />
        </form>
      </div>
      </>
    );
}
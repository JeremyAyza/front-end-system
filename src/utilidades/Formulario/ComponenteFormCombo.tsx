export default function ComponenteFormCombo(){
    return(
      <div className="form-group p-2">
				<label htmlFor="inputProveedor">Proveedor:</label>
				<select className="form-control">
					<option>Ciclope</option>
					<option>Somplass</option>
					<option>Gigabyte</option>
					<option>Hp</option>
				</select>
	    </div>
    );
}
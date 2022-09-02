export default function ComponenteListTableHeadVenta(props:datosList){
    return(
        <>
            <thead className="table-dark">
                <tr className="text-center">
                {
                    props.lista.map((valor:any) => { return <th key={valor} >{valor}</th> }) 
                }
                <th colSpan={1}  >Accion</th>
                </tr>
            </thead>
        </>
    )
}


interface datosList {
	lista?: any
	
}
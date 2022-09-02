export default function ComponenteListTableHeadDetalle(props:datosList){
    return(
        <>
            <thead>
                <tr className="text-center">
                {
                    props.lista.map((valor:any) => { return <th>{valor}</th> }) 
                }
                </tr>
            </thead>
        </>
    )
}


interface datosList {
	lista?: any
	
}
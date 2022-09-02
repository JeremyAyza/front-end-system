export default function ComponenteListHead(props: datosList) {
    return (
        <thead className="table-dark">
            <tr className="text-center">

                {
                    props.lista.map((valor: any) => { return <th key={valor}>{valor}</th> })
                }

                <th colSpan={2} style={{ maxWidth: "100px" }}>Acciones</th>
            </tr>
        </thead>

    )
}

interface datosList {
    lista?: any

}
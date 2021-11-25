export default function selectTabajador ({list_trabajador}) {
    return (
        <div>
            {list_trabajador.map((trabajador, i) => (
                    <ul>
                        <li>Nombre: {trabajador.n_nombre_completo}</li>
                        <li>Dirección: {trabajador.n_traba_direccion}</li>
                        <li>Ubicación: {trabajador.n_depfis_nombre}</li>
                        <li>Cargo: {trabajador.n_carfis_nombre}</li>
                    </ul>
            ))}            
        </div>
    )
}

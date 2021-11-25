import { useState, useRef } from 'react'
import { obtenerTrabajador } from '../services/trabajadorService'
import selectTabajador from '../components/TrabajadorComponent'

export default function TrabajadorView(){

    const [trabajador, setTrabajador] = useState([])

    const inputBusqueda = useRef()

    const ejecutarBusqueda = async () => {
        let nroDNI = inputBusqueda.current.value
        const trabajadorTmp = await obtenerTrabajador("DNI", nroDNI)
        setTrabajador(trabajadorTmp)
    }

    return (
        <div className="col-sm-12 col-md-6">
            <h5>Buscar trabajador</h5>
            <div className="d-flex gap-1">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese DNI del trabajador"  
                    ref={inputBusqueda}            
                />
                <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                    <i className="fas fa-search" />
                </button>
            </div>
            <selectTabajador list_trabajador={trabajador} />
        </div>
    )

}
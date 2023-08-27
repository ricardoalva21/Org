import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
    // Estado = hooks
    // useState
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log('mostrar/ocultar', mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="org-section">
        <h3 className='title'>Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg
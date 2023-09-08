import { useState } from "react"
import "./Campo.css"

const Campo = (props)=> {
   
    
    const placeholderModificado = `${props.placeholder}..`
    //Destructuración , si esta indefinido se puede asignar asi ->  {type = "text"}
    const {type = "text"} = props

    const manejarCambio = (e)=> {
        
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        ></input>
    </div>
}

export default Campo
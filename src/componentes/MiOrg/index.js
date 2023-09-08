import "./MiOrg.css"
import { useState } from "react";

const MiOrg = (props) =>{
    //    [nombreVariable, nombreFuncionActualiza] = useState(ValorConQueInicia)
    // const [mostrar, actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento: "+ !mostrar);
    //    actualizarMostrar(!mostrar);
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/more.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>

}

export default MiOrg
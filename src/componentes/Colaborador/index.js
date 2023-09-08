import "./Colaborador.css"
import {TbHttpDelete} from "react-icons/tb"
//import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {ImCheckmark2,ImCheckmark} from "react-icons/im"


const Colaborador = (props) => {
    const {nombre,puesto,foto, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    return <div className="colaborador">
        <TbHttpDelete className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <ImCheckmark color="green" onClick={()=>like(id)}/> : <ImCheckmark2 onClick={()=>like(id)}/> }
               
        </div>
    </div>
}

export default Colaborador
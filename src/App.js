import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';

import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),  
    equipo:"Phalax",
    foto:"https://scontent.fmex28-1.fna.fbcdn.net/v/t1.6435-9/122548239_725228401402037_6828599822407924670_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G_6UvsvxF9MAX8mFeHV&_nc_ht=scontent.fmex28-1.fna&oh=00_AfAi-brtWtwZot_TI2k3UxLLC4VbYvbfuRTI36pyuLkaIA&oe=65090B9F",
    nombre:"Daniel Cervantes",
    puesto:"Carroñero",
    fav: true
  },
  {
    id: uuid(),
  equipo:"Konni",
  foto:"https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/372918454_24451451107787160_8583834743583820686_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEX-nAk5WDBD95o4LyPP29qZ-bVpSUa8yRn5tWlJRrzJPGroTil2oL-Tyer559cQ8UxLi6Uld-XlcNfmmCN-7Ga&_nc_ohc=TxnpHV5sWt0AX8dk1XF&_nc_ht=scontent.fmex27-1.fna&oh=00_AfCiL_tmEw0K61yX2FhXYQl_Hd5wUoGHGMOowjRbIDZQsA&oe=64FD3549",
  nombre:"William Cesar",
  puesto:"Tirador",
  fav: false 
  },
  { 
    id: uuid(),
  equipo:"Shadow Company",
  foto:"https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/295929756_2538234069647175_52224874530864203_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEaHfQFg3iON2I45iJRkA-AlZwNva4ahJWVnA29rhqElfH9oXMdBfwqEB3zp15zH9lCd6Fp-V1h7I6S1c2-8a5A&_nc_ohc=ZZvOM5vsEOsAX-jAmN5&_nc_ht=scontent.fmex36-1.fna&oh=00_AfAYL6qrIb8mtjLyPMWQq_7Ljfsk7A0nxgQh27TpJia8rg&oe=64FE4061",
  nombre:"Esteban Rojo",
  puesto:"Apoyo",
  fav: false 
},{
  id: uuid(),
  equipo:"Black Mous",
  foto:"https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/60478168_2222993767766567_8351483251881148416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEkmBuZKNI7UzdtT7P7pdyJl3gIimlFCluXeAiKaUUKW-b5Os77MHGVGhw0If9SNTCE89GHyQyyS3lyGsOf9R-U&_nc_ohc=ID3We_MRKhQAX8Wo2cb&_nc_ht=scontent.fmex31-1.fna&oh=00_AfBVXYZkeXceQedhQbnPOK9pKE3HnO0RQbqGDqnAnapGSA&oe=651FD55F",
  nombre:"Valeria Esquivel",
  puesto:"Especialista en Armas",
  fav: false 
},{
  id: uuid(),
  equipo:"White Lotus",
  foto:"https://hips.hearstapps.com/hmg-prod/images/john-wick-3-parabellum-1558685041.jpg?crop=0.564xw:1.00xh;0.220xw,0&resize=1200:*",
  nombre:"John Wick",
  puesto:"Baba Yaga",
  fav: false 
}]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Phalax",
      colorPrimario: "#4f5545",
      colorSecundario: "#7a836b"
    },
    {
      id: uuid(),
      titulo: "White Lotus",
      colorPrimario: "#787878S",
      colorSecundario: "#657051"
    },
    {
      id: uuid(),
      titulo: "Black Mous",
      colorPrimario: "#64467C",
      colorSecundario: "#60705d"
    },
    {
      id: uuid(),
      titulo: "Crown",
      colorPrimario: "#4c4e41",
      colorSecundario: "#797c69"
    },
    {
      id: uuid(),
      titulo: "Shadow Company",
      colorPrimario: "#B7B071",
      colorSecundario: "#707457"
    },
    {
      id: uuid(),
      titulo: "Konni",
      colorPrimario: "#740606",
      colorSecundario: "#697047"
    }
    
  ])

  
  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrarForm(!mostrarFormulario)
  }


  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador);
    //Spread operator / React: Como los componentes funcionan.02 Registrando colaborador
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colav}borador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id)=>{
    console.log("Actualizar color ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
        
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    //[...equipos (copia el valor actual de equipos)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  }

//

  const like = (id)=>{
    console.log("liked: ", id)
    const colaboradoresActualñizados = colaboradores.map((colaborador) =>{
      if( colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador 
    })
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>}
      
      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo)=><Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer/>
    </div>
  );
}

export default App;

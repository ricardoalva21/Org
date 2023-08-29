import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import Colaborador from './componentes/Colaborador';


function App() {
const [mostrarFormulario, actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: 'Front End',
    nombre: 'Ricardo Alvarado',
    puesto: 'Desarrollador',
    foto: 'https://github.com/ricardoalva21.png',
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/sucodelarangela.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
]);

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo:'Programacion',
    colorPrimario: '#57C278',
    colorSecundario: '#D9F7E9',
  },
  {
    id: uuid(),
    titulo:'Front End',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF',
  },
  {
    id: uuid(),
    titulo:'Data Science',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF',
  },
  {
    id: uuid(),
    titulo:'Devops',
    colorPrimario: '#E06B69',
    colorSecundario: '#FDE7E8',
  },
  {
    id: uuid(),
    titulo:'UX y Diseño',
    colorPrimario: '#DB6EBF',
    colorSecundario: '#FAE9F5',
  },
  {
    id: uuid(),
    titulo:'Movil',
    colorPrimario: '#FFBA05',
    colorSecundario: '#FFF5D9',
  },
  {
    id: uuid(),
    titulo:'Innovacion y Gestion',
    colorPrimario: '#FF8A29',
    colorSecundario: '#FFEEDF',
  },
])

// ternario --> condicion ? seMuestra : seMuestra
// condicion && seMuestra

const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
}

// Registrar Colaborador

const registrarColaborador = (colaborador) => {
  console.log('Nuevo colaborador', colaborador)
  // Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}
// Eliminar Colaborador
const eliminarColaborador = (id) => {
  console.log('Eliminar colaborador', id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
  actualizarColaboradores(nuevosColaboradores)
}

// actualizar color de equipo
const actualizarColor = (color, id) => {
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    } 
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}
// Crear equipo
const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const like = (id) => { 
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)

}


  return (
    <div> 
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
           equipos= {equipos.map((equipo) => equipo.titulo)}
           registrarColaborador={registrarColaborador}
           crearEquipo={crearEquipo}
           />
      } 


      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key ={equipo.titulo} 
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor= {actualizarColor}
        like = {like}
        />
        )
      }
      
      <Footer />
      
    </div>
  );
}

export default App;

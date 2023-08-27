import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
const [mostrarFormulario, actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([{
  equipo: 'Front End',
  nombre: 'Ricardo Alvarado',
  puesto: 'Desarrollador',
  foto: 'https://github.com/ricardoalva21.png',
  
}])

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

// Lista de equipos
const equipos = [
  {
    titulo:'Programacion',
    colorPrimario: '#57C278',
    colorSecundario: '#D9F7E9',
  },
  {
    titulo:'Front End',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF',
  },
  {
    titulo:'Data Science',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF',
  },
  {
    titulo:'Devops',
    colorPrimario: '#E06B69',
    colorSecundario: '#FDE7E8',
  },
  {
    titulo:'UX y Diseño',
    colorPrimario: '#DB6EBF',
    colorSecundario: '#FAE9F5',
  },
  {
    titulo:'Movil',
    colorPrimario: '#FFBA05',
    colorSecundario: '#FFF5D9',
  },
  {
    titulo:'Innovacion y Gestion',
    colorPrimario: '#FF8A29',
    colorSecundario: '#FFEEDF',
  },
]

  return (
    <div> 
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
           equipos= {equipos.map((equipo) => equipo.titulo)}
           registrarColaborador={registrarColaborador}
           />
      } 


      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key ={equipo.titulo} 
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
        )
      }
      
      <Footer />
      
    </div>
  );
}

export default App;

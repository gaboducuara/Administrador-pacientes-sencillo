import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Citas en localStorage,  para cuando recargue la pagina no se elimine la pagina
  // let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  // if(!citasIniciales) {
  //   citasIniciales = [];
  // }

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  // useEffect(() => {
  //   if(citasIniciales) {
  //     localStorage.setItem('citas', JSON.stringify(citas))
  //   } else {
  //     localStorage.setItem('citas', JSON.stringify());
  //   }
  // }, [citas]);

  useEffect(() => {
    console.log('Documento')
  }, [citas]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([...citas, cita]);
    // console.log(citas)
  };

  //Funcion que elimina una cita por su iD
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje Condicional
  const titulo = citas.length === 0 ? 'No hoy citas' :'Administra tus Citas';
  // console.log(citas.length)

  return (
    <Fragment>
      <h1>Administradr de tareas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          
          <div className="one-half column">
            <h2>{titulo}</h2>
             {citas.map(cita => (
              <Cita key={cita.id}               
              cita={cita} 
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

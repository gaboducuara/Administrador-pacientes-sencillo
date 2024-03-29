import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada que el usuario escribe un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,  // se agrega cita para escribir en cada objeto del useState
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  };

  //Extraer los valores del useState (cita / actualizarCita)
  const {mascota, propietario , fecha, hora, sintomas}  = cita;
  //Cuando el usuario presiona agregar cita o enviar formulario

  const submitCita = e => {
    e.preventDefault();

    // Validar 
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      console.log('hay un error');
      actualizarError(true);
      return;
    };

    //Eliminar el mensaje previo
    actualizarError(false);

    //Asignar un ID
    cita.id = uuidv4();
    //Crear la cita
    crearCita(cita);
    //Reiniciar el Form
    actualizarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
    })

    console.log('enviando form');
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre de la Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre Dueño de mascotas"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>

      </form>
    </Fragment>
  );
};

export default Formulario;

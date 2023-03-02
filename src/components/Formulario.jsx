import React, { Fragment, useState } from "react";

const Formulario = () => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

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

    console.log(mascota);

    // Validar 
    if(mascota.trim() === '') {
      console.log('hay un error LOl')
    }


    //Asignar un Id

    //Crear la cita

    //Reiniciar el Form

    console.log('enviando form');
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

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
      </form>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </Fragment>
  );
};

export default Formulario;

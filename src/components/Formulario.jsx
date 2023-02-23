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
  const actualizarState = () => {
    console.log("escribiendo ...");
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre de la Mascota"
          onChange={actualizarState}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre Dueño de mascotas"
          onChange={actualizarState}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
        ></textarea>
      </form>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </Fragment>
  );
};

export default Formulario;

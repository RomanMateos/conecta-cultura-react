function MisInscripciones({ inscripciones, onEliminar }) {
  if (inscripciones.length === 0) {
    return <p>Todavía no tienes inscripciones.</p>;
  }

  return (
    <section className="mt-5">
      <h2 className="h4">Mis inscripciones</h2>
      <ul className="list-group">
        {inscripciones.map((actividad) => (
          <li
            key={actividad.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {actividad.nombre}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onEliminar(actividad.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MisInscripciones;
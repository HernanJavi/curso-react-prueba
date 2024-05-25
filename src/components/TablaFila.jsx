const TablaFila = ({ prod }) => {
  return (
    <tr>
      <th scope="row">{prod.nombre}</th>
      <td>{prod.categoria}</td>
      <td><img src={prod.foto} alt="" width='50' /></td>
      <td>{prod.precio}</td>
      <td>
        <button className="btn btn-info me-2">Ver</button>
        <button className="btn btn-warning me-2">Editar</button>
        <button className="btn btn-danger">Borrar</button>
      </td>
    </tr>
  );
};

export default TablaFila;

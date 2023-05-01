import '../../css/List.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from "dateformat"

const labels = [
  "# Servicio",
  "Fecha",
  "Ciudad Entrega",
  "Direccion Entrega",
  "Estado",
  "Opciones"
];

const List = () => {
  const [items, setItems] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const userId = "6387bf36ac8a8fcbd67ef28c"
    axios
      .get("https://instayaback-end-production.up.railway.app/items?userId=" + userId)
      .then(result => {
        console.log(result.data);
        setItems(result.data);
      })


  },[update]);

  const handleDelete = (itemId) => {
    axios
      .delete("https://instayaback-end-production.up.railway.app/items/delete/" + itemId)
      .then(response => {
        console.log(response.data)
        setUpdate(!update)
      })
  }

  return (
    <>
      <div className="container-table">
        <h2 className="display-5 mt-5">Gestion de Paquetes InstaYA</h2>
        <Link className="btn btn-primary my-5 p-3" to="/new">Crear Nueva Orden</Link>
        <table className="table table-striped table-hover table-bordered text-center align-middle shadow-lg">
          <thead className="table-dark">
            <tr>
            {labels.map((label, index) => {
              return (
                <th key={index} scope="col">{label}</th>
              );
            })}
            </tr>
          </thead>
          <tbody>
            {items != null ? items.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{dateFormat(item.fecha, "yyyy-mm-dd")}</td>
                  <td>{item.ciudadE}</td>
                  <td>{item.addE}</td>
                  <td>{item.state}</td>
                  <td className="d-flex gap-2 justify-content-center">
                    <Link className="btn btn-success" to={"/" + item._id + "/edit"}>Editar</Link>
                    <a className="btn btn-danger" onClick={() => handleDelete(item._id)}>Borrar</a>
                  </td>
                </tr>
              );
            }) : ''}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;

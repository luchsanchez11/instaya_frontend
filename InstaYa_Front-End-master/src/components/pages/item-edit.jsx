import { useParams } from "react-router-dom";
import ItemForm from "./Item-form";
import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";

const ItemEdit = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://instayaback-end-production.up.railway.app/items/" + id)
      .then((response) => {
        console.log(response.data)
        const fechaFormat = response.data.fecha;
        response.data['fecha'] = dateFormat(fechaFormat, "yyyy-mm-dd");        
        setItem(response.data)
      })
  }, [])

  return (
    <>
      {item ? (
        <>
          <h2 className="display-5 my-4 ms-5">Editar Orden</h2>
          <ItemForm data={item} itemId={id}/>
        </>
      ) : ''}
    </>
  );
};

export default ItemEdit;

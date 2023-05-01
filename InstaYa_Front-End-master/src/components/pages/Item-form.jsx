import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ItemForm = ({ data, itemId}) => {
  const[isEdit, setIsEdit] = useState(false);
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const customSubmit = (dataForm) => {
    const itemObject = {
        nombreD: dataForm.NombreD,
        cedula: dataForm.Cedula,
        addE: dataForm.AddE,
        ciudadR: dataForm.CiudadR,
        addR: dataForm.AddR,
        state: dataForm.State,
        hora: dataForm.Hora,
        fecha: dataForm.Fecha,
        largo: dataForm.Largo,
        ancho: dataForm.Ancho,
        alto: dataForm.Alto,
        peso: dataForm.Peso,
        ciudadE: dataForm.CiudadE,
        userId: "6387bf36ac8a8fcbd67ef28c"
    }
    if (isEdit){
        axios
            .put("https://instayaback-end-production.up.railway.app/items/edit/" + itemId, itemObject)
            .then(response => console.log(response)) 
                
    }else{
        axios
        .post("https://instayaback-end-production.up.railway.app/items/create", itemObject)
        .then(response => console.log(response))             
    }
    
    
  }

  useEffect(() => {
    if(data.length !== 0) {
      setIsEdit(true);
      setValue('NombreD',data.nombreD);
      setValue('Cedula',data.cedula);
      setValue('CiudadE',data.ciudadE);
      setValue('AddE',data.addE);
      setValue('CiudadR',data.ciudadR);
      setValue('AddR',data.addR);
      setValue('State',data.state);
      setValue('Hora',data.hora);
      setValue('Fecha',data.fecha);
      setValue('Largo',data.largo);
      setValue('Ancho',data.ancho);
      setValue('Alto',data.alto);
      setValue('Peso',data.peso);
    }    
  });
  
  return(
    <>
      <form className="px-5" onSubmit={handleSubmit(customSubmit)}>
        <div className="row my-3">
            <div className="col">
                <label>Nombre destinatario</label>
                <input className="form-control"
                    {...register("NombreD", { required: true })}
                    aria-invalid={errors.NombreD ? "true" : "false"}
                />
                {errors.NombreD && <p>Revisa el campo</p>}
            </div>  
            
            <div className="col">
                <label>Cédula/Nit destinatario</label>
                <input className="form-control"
                    type="number"
                    {...register("Cedula", { required: true})}
                    aria-invalid={errors.Cedula ? "true" : "false"}
                />
                {errors.Cedula && <p>Revisa el campo</p>}
            </div>
        </div>

          <div className="row my-3">
            <div className="col">
                <label>Ciudad entrega</label>
                <input className="form-control"
                    {...register("CiudadE", { required: true })}
                    aria-invalid={errors.CiudadE ? "true" : "false"}
                />
                {errors.CiudadE && <p>Field required</p>}
            </div>
            
            <div className="col">
                <label>Direccion entrega</label>
                <input className="form-control"
                    {...register("AddE", { required: true })}
                    aria-invalid={errors.AddE ? "true" : "false"}
                />
                {errors.AddE && <p>Field required</p>}
            </div> 
          </div>

          <div className="row my-3">
            <div className="col">
                <label>Ciudad recogida</label>
                <input className="form-control"
                    {...register("CiudadR", { required: true })}
                    aria-invalid={errors.CiudadR ? "true" : "false"}
                />
                {errors.CiudadR && <p>Field required</p>}
            </div>
            
            <div className="col">
                <label>Direccion recogida</label>
                <input className="form-control"
                    {...register("AddR", { required: true })}
                    aria-invalid={errors.AddR ? "true" : "false"}
                />
                {errors.AddR && <p>Field required</p>}
            </div>
          </div>  

          <div className="row my-3">
            <div className="col">
                <label>Estado</label>
                <input className="form-control"
                    {...register("State", { required: true })}
                    aria-invalid={errors.State ? "true" : "false"}
                />
                {errors.State && <p>Field required</p>}
            </div>

          
            <div className="col">
                <label>Hora</label>
                <input className="form-control"
                    {...register("Hora", { required: true})}
                    aria-invalid={errors.Hora ? "true" : "false"}
                />
                {errors.Hora && <p>Min 868. Max 2022</p>}
            </div>  
            
            <div className="col">
                <label>Fecha</label>
                <input className="form-control"
                    type="date"
                    {...register("Fecha", { required: true})}
                    aria-invalid={errors.Fecha ? "true" : "false"}
                />
                {errors.Fecha && <p>Field required</p>}
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
                <label>Largo</label>
                <input className="form-control"
                    type="number"
                    {...register("Largo", { required: true})}
                    aria-invalid={errors.Largo ? "true" : "false"}
                />
                {errors.Largo && <p>Min 868. Max 2022</p>}
            </div>
            
            <div className="col">
                <label>Ancho</label>
                <input className="form-control"
                    type="number"
                    {...register("Ancho", { required: true})}
                    aria-invalid={errors.Ancho ? "true" : "false"}
                />
                {errors.Ancho && <p>Min 868. Max 2022</p>}
            </div>
            
            <div className="col">
                <label>Alto</label>
                <input className="form-control"
                    type="number"
                    {...register("Alto", { required: true})}
                    aria-invalid={errors.Alto ? "true" : "false"}
                />
                {errors.Alto && <p>Min 868. Max 2022</p>}
            </div>
            
            <div className="col">
                <label>Peso</label>
                <input className="form-control"
                    type="number"
                    {...register("Peso", { required: true})}
                    aria-invalid={errors.Peso ? "true" : "false"}
                />
                {errors.Peso && <p>Min 868. Max 2022</p>}
            </div>
          </div>

          <div className="row my-5">
            <input type="submit" className={isEdit ? "btn btn-success col-2 mx-auto p-2" : "btn btn-primary col-2 mx-auto p-2"} value={isEdit ? "Editar" : "Crear"} />
          </div>
          
      </form>
    </>
  );
};

export default ItemForm;

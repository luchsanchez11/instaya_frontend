import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/Login.css';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const customSubmit = (data) => {console.log(data);};
    return (
        <form onSubmit={handleSubmit(customSubmit)}>
            <div className="form__item">
                <label>Nombre</label>
                <input 
                {...register("firstName", { required: true, maxLength:10 })}
                aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && <p>Revisa el campo</p>}
            </div>
            <div className="form__item">
                <label>Apellido</label>
                <input 
                {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && <p>Revisa el campo</p>}
            </div>
            <div className="form__item">
                <label>Edad</label>
                <input
                type="number" 
                {...register("age", { required: true, min:18, max: 99 })}
                aria-invalid={errors.age ? "true" : "false"}
                />
                {errors.age && <p>Revisa el campo</p>}
            </div>
            <div className="form__item">
                <label>Fecha</label>
                <input
                type="date" 
                {...register("date", { required: true })}
                aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date && <p>Revisa el campo</p>}
            </div>
            <input type="submit" value="send"></input>
        </form>
    );
}

export default Login;
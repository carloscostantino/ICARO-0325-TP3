import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Esquema de validación con Yup
const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Formato de email inválido").required("El email es obligatorio"),
  edad: yup.number().positive().integer().required("La edad es obligatoria")
});

export default function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="container mt-4">
      <h2>Formulario con React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input {...register("nombre")} className="form-control" />
          <p className="text-danger">{errors.nombre?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input {...register("email")} className="form-control" />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input type="number" {...register("edad")} className="form-control" />
          <p className="text-danger">{errors.edad?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

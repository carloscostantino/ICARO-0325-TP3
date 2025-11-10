import { useState } from "react";
import { useForm } from "../hooks/useForm";
import "./Contact.css";

function Contact() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`✅ Mensaje enviado correctamente por ${values.name}.`);
    resetForm();

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p className="contact-text">
        Si querés ponerte en contacto con nosotros, completá el siguiente formulario.
        Te responderemos a la brevedad.
      </p>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;

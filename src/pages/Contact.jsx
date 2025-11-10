import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Por favor, completá todos los campos antes de enviar.");
    }
  };

  return (
    <div className="container-fluid py-5">
      <h1 className="mb-4 text-center">Contacto</h1>


      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresá tu nombre"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@correo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribí tu mensaje..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar mensaje
          </button>
        </form>
      ) : (
        <div className="alert alert-success text-center mt-4" role="alert">
          ¡Gracias por tu mensaje! Te responderemos pronto.
        </div>
      )}
    </div>
  );
}

export default Contact;

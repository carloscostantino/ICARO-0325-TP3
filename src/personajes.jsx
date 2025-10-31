import React, { useState, useEffect } from 'react';

function Personajes() {
  const [contador, setContador] = useState(0);
  const [imagenUrl, setImagenUrl] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        setError('');
        const respuesta = await fetch(`https://thronesapi.com/api/v2/Characters/${contador}`);
        if (!respuesta.ok) throw new Error('Personaje no encontrado');
        const data = await respuesta.json();
        setImagenUrl(data.imageUrl);
        setNombre(data.fullName);
      } catch (err) {
        setError('No se pudo obtener el personaje');
        setImagenUrl('');
        setNombre('');
        console.error(err);
      }
    };

    obtenerPersonaje();
  }, [contador]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Personaje de Game of Thrones</h1>
      <p>Contador: {contador}</p>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : imagenUrl ? (
        <>
          <h2>{nombre}</h2>
          <img
            src={imagenUrl}
            alt="Personaje"
            style={{ width: '200px', height: '300px', borderRadius: '10px' }}
          />
        </>
      ) : (
        <p>Cargando...</p>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setContador(prev => Math.max(0, prev - 1))}>Bajar</button>
        <button onClick={() => setContador(prev => Math.min(prev + 1, 52))}>Subir</button>
      </div>
    </div>
  );
}

export default Personajes;

import { useState } from 'react';

export default function AddAutomotor( { onPaginaCliente , onAddAutomotor , marca1 ,modelo1, placa1, nivel1, detalle1 } ) {
    const [marca, setMarca] = useState(marca1);  
    const [modelo, setModelo] = useState(modelo1);
    const [placa, setPlaca] = useState(placa1);
    const [nivel, setNivel] = useState(nivel1);
    const [detalle, setDetalle] = useState(detalle1);

    return (
      <>
          <input
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
          />
          <br />
          <input
              placeholder="Modelo vehiculo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
          />
          <br />
          <input
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
          />
          <br />
          <input
              placeholder="Nivel Gasolina"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
          />
          <br />
          <input
              placeholder="Observaciones del vehiculo"
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
          />
          <br />
          <br />

          <button
                  onClick={() => {
                    onPaginaCliente();
  
                  }}>
                  Atras
          </button>
          <button
                  onClick={() => {
                    onAddAutomotor({ marca, modelo, placa , nivel, detalle   });

                  }}>
                  Servicio
          </button>
  
      </>
    );
  
  }
  
import { useState } from 'react';

export default function AddOrden( { onPaginaServicio, onAddOrden  , nombreT , correoT, telefonoT, tipoT, cedulaT, marcaT, modeloT, placaT, nivelT, detalleT, aceiteT, frenoT, alineacionT, electricoT, suspensionT} ) {
    const fecha = new Date();
    
    const horas = 240 * 60 * 1000;
    fecha.setTime(fecha.getTime() + horas);

    const fechaF = fecha.toString();

    return (
        <div>
            <h3>Datos del Cliente </h3>
            <label>
                Nombre:{'   '}
                <input  value={nombreT} disabled="true"  />
            </label> <br />
            <label>
                Correo:{'   '}
                <input  value={correoT} disabled="true"  />
            </label> <br />
            <label>
                Telefono:{'   '}
                <input  value={telefonoT} disabled="true"  />
            </label> <br />
            <label>
                Tipo:{'   '}
                <input  value={tipoT} disabled="true"  />
            </label> <br />
            <label>
                Cedula:{'   '}
                <input  value={cedulaT} disabled="true"  />
            </label>

            <br />
            <h3>Datos del Vehiculo </h3>
            <label>
                Marca:{'   '}
                <input  value={marcaT} disabled="true"  />
            </label> <br />
            <label>
                Modelo:{'   '}
                <input  value={modeloT} disabled="true"  />
            </label> <br />
            <label>
                Placa:{'   '}
                <input  value={placaT} disabled="true"  />
            </label> <br />
            <label>
                Nivel:{'   '}
                <input  value={nivelT} disabled="true"  />
            </label> <br />
            <label>
                Detalles:{'   '}
                <input  value={detalleT} disabled="true"  />
            </label>

            <br />
            <h3>Servicios seleccionados </h3>
            <label >
                Cambio de Aceite: {'   '}
                <input  type="checkbox" defaultChecked={aceiteT}   disabled="true"/>
            </label>
            <br />
            <label >
                Cambio de Frenos: {'   '}
                <input  type="checkbox" defaultChecked={frenoT}   disabled="true"/>
            </label>
            <br />
            <label >
                Alineación y Balanceo: {'   '}
                <input  type="checkbox" defaultChecked={alineacionT}   disabled="true"/>
            </label>
            <br />
            <label >
                Sistema Eléctrico: {'   '}
                <input  type="checkbox" defaultChecked={electricoT}   disabled="true"/>
            </label>
            <br />
            <label >
                Ajuste de Suspensión: {'   '}
                <input  type="checkbox" defaultChecked={suspensionT}   disabled="true"/>
            </label>
            <br />

             <p>Su vehiculo estara listo a las {fechaF}</p>
            <br />
            <br />
            <button
                onClick={() => {
                    onPaginaServicio();
                }}>
                Atras
            </button>

            <button
                onClick={() => {
                    onAddOrden();
                }}>
                Aceptar
            </button>

            <button
                onClick={() => {
                    window.print();
                }}>
                Imprimir
            </button>

        </div>
    );

}
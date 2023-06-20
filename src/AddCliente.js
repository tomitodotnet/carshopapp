import { useState } from 'react';

export default function AddCliente({ onAddCliente , nombre , correo , telefono , cedula , tipo}  ) {
    const [name, setName] = useState(nombre);
    const [email, setEmail] = useState(correo);
    const [phone, setPhone] = useState( telefono);
    const [ident, setIdent] = useState( cedula);
    const [tipoident, setTipoident] = useState( tipo );

    //setName(nombre);

    return (
        <>
            <input
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                placeholder="Número Contacto"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <br />
            <input
                placeholder="C Cedula R RUC"
                value={tipoident}
                onChange={(e) => setTipoident(e.target.value)}
            />
            <br />
            <input
                placeholder="Identificación"
                value={ident}
                onChange={(e) => setIdent(e.target.value)}
            />

            <br />
            <br />

            <button
                onClick={() => {
                    onAddCliente({ name, email, phone , ident, tipoident   });
                    //alert (name);
                    //setName('');|
                    //setAddress('');

                }}>
                Vehiculo
            </button>
        </>
    );
}

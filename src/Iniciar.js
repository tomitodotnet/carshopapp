import './App.css';
import Cabeza from './Cabeza';
import Pasos from './Pasos';
import AddCliente from './AddCliente';
import AddAutomotor from './AddAutomotor';
import AddServicio from './AddServicio';
import AddOrden from './AddOrden';

import clienteReducer from './clienteReducer';

import { useReducer, useState } from 'react';

let nextId = 1;
const initialClientes = [
    { id: 0, name: 'Tomás Hernandez', email: 'thernanp@gmail.com', phone: '0912345678',   ident: '0912345678', tipoiden: 'Cedula' , select: false },
    
];



function Iniciar(props) {
  //setRedirectToDestino(true);
  //const redirectToDestino = props.redirectToDestino;
  //const dato = { name, email, phone , ident , tipoiden };

  const [clienteactual, setClienteactual] = useState({});
  const [clientes, dispatch] = useReducer(clienteReducer, initialClientes);

  const [pagina, setPagina] = useState('cliente');
  
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cedula, setCedula] = useState('');
  const [tipo, setTipo] = useState('');
  
      //  marca1 ,modelo1, placa1, nivel1, detalle1
      const [marca1, setMarca1] = useState('');
      const [modelo1, setModelo1] = useState('');
      const [placa1, setPlaca1] = useState('');
      const [nivel1, setNivel1] = useState('');
      const [detalle1, setDetalle1] = useState('');
    
      const [aceite1, setAceite1] = useState(false);  
      const [freno1, setFreno1] = useState(false);
      const [alineacion1, setAlineacion1] = useState(false);
      const [electrico1, setElectrico1] = useState(false);
      const [suspension1, setSuspension1] = useState(false);

      const [orden, setOrden] = useState({
        nombre,
        correo,
        telefono,
        cedula,
        tipo,
        marca1,
        modelo1
      });
      
      const setCampos = ()=>{
        orden.nombre = nombre;
        orden.correo = correo;
        orden.telefono = telefono;
        
      }

  const limpieza = ()=>{
    setNombre('');
    setCorreo('');
    setTelefono('');
    setCedula('');
    setTipo('');
    
    setMarca1('');
    setModelo1('');
    setPlaca1('');
    setNivel1('');
    setDetalle1('');

    setAceite1(false);
    setFreno1(false);
    setAlineacion1(false);
    setElectrico1(false);
    setSuspension1(false);
    
  

  }

  const handleAddCliente = ({ name, email, phone , ident , tipoident }) => {
    /*
    dispatch({
        type: 'add',
        cliente: {
            id: nextId++,
            name,
            email,
            phone,
            ident,
            tipoident
        }
    });
*/
    //llam2aar al sigte compondnte
    //alert('Datos ok');
    setNombre(name);
    setCorreo(email);
    setTelefono(phone);
    setCedula(ident);
    setTipo(tipoident);

    
    //dato.nombre = name;
    //dato.correo = email;
    
    //alert (dato.name);
    //setClienteactual(dato);

    //alert (name);
    //alert (clienteactual.name);

    setPagina('automotor');

    
  }

  const handleAddAutomotor = ({ marca, modelo, placa , nivel , detalle }) => {

    //  marca1 ,modelo1, placa1, nivel1, detalle1

    setMarca1(marca);
    setModelo1(modelo);
    setPlaca1(placa);
    setNivel1(nivel);
    setDetalle1(detalle);    

    setPagina('servicio');

    
  }

  const handleAddServicio = ({ aceite, freno, alineacion , electrico , suspension }) => {


    setAceite1(aceite);
    setFreno1(freno);
    setAlineacion1(alineacion);
    setElectrico1(electrico);
    setSuspension1(suspension);    

    setPagina('orden');

    
  }

  const handleAddOrden = () => {

    //imprimir
    setCampos();
    alert ("Su orden fue generada satisfactoriamente");
    //window.print();
    setPagina('cliente');
    limpieza();

  }


  const handlePaginaCliente = () => {
    setPagina('cliente');
    //alert(' hacia {pagina} ' + pagina );
  }

  const handlePaginaAutomotor = () => {
    setPagina('automotor');
  }
  const handlePaginaServicio = () => {
    setPagina('servicio');
  }



  if( pagina=='cliente')
  {

    return (
      <>
        <div className="App">
          <Cabeza />
          <Pasos paso="1" />

          <div style={{ flex: 1, flexDirection: 'row' }}>
                <h1>Datos del Cliente</h1>
                <AddCliente onAddCliente={handleAddCliente}  nombre = {nombre} correo = {correo}  telefono={telefono} cedula={cedula} tipo={tipo}  />
          </div>


        </div>
      </>    
    );

  }

  if( pagina=='automotor')
  {

    return (
      <>
        <div className="App">
          <Cabeza />
          <Pasos paso="2" />

          <div style={{ flex: 1, flexDirection: 'row' }}>
                <h1>Datos del Vehiculo </h1>
                <AddAutomotor onPaginaCliente = {handlePaginaCliente}  onAddAutomotor = {handleAddAutomotor}  marca1={marca1} modelo1={modelo1} placa1={placa1} nivel1={nivel1} detalle1={detalle1}  />
          </div>
  
        </div>
      </>    
    );
    
  }

  if( pagina=='servicio')
  {

    return (
      <>
        <div className="App">
          <Cabeza />
          <Pasos paso="3" />

          <div style={{ flex: 1, flexDirection: 'row' }}>
                <h1>Selección de Servicios </h1>
                <AddServicio onPaginaAutomotor = {handlePaginaAutomotor}  onAddServicio = {handleAddServicio}  aceite1={aceite1} freno1={freno1} alineacion1={alineacion1} electrico1={electrico1} suspension1={suspension1}  />
          </div>
  
        </div>
      </>    
    )
    
  }

  if( pagina=='orden')
  {

    return (
      <>
        <div className="App">
          <Cabeza />
          <Pasos paso="4" />

          <div style={{ flex: 1, flexDirection: 'row' }}>
                <h1>Orden de Trabajo </h1>
                <AddOrden  onPaginaServicio={handlePaginaServicio} onAddOrden = {handleAddOrden}  nombreT = {nombre} correoT ={correo} telefonoT={telefono}  tipoT={tipo} cedulaT={cedula} marcaT={marca1} modeloT={modelo1} placaT={placa1} nivelT={nivel1}  detalleT={detalle1}  aceiteT={aceite1} frenoT={freno1}  alineacionT={alineacion1}  electricoT={electrico1} suspensionT = {suspension1}  />
          </div>
  
        </div>
      </>    
    );
    
  }

  
}

export default Iniciar;

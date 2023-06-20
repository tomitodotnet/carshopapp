import logo from './mustang.svg';
import './App.css';

function Encabezado(props) {
  const Mostrar = props.Mostrar;
  
  if (Mostrar) {   
    <></>
   
  }

  
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Car Shop Tomito
    </p>
    <a
      className="App-link"
      href='./Iniciar'
      target="_blank"
      rel="noopener noreferrer"
    >
      Empezar
    </a>

  </header>

  );

}

export default Encabezado;

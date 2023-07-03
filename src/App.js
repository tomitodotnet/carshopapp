// prueba3
//import logo from './mustang.svg';
import './App.css';
import Iniciar from './Iniciar';
import Encabezado from './Encabezado';
import { BrowserRouter as Router,  Route , Link} from "react-router-dom";
import { useReducer, useState } from 'react';

function App() {
  const [redirectToDestino, setRedirectToDestino] = useState(false);
  
  
  return (
    <div className="App">

<Router>
          <div>
              <Link to="/Iniciar">Empezar</Link> 
            </div>

<Route path="/Iniciar" component = {Iniciar}>
    <Iniciar redirectToDestino = {true} />
    
</Route>
</Router>

<Encabezado Mostrar = {redirectToDestino}/>



    </div>

  );
}

export default App;

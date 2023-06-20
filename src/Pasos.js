import './App.css';

export default function Pasos( {paso} ) {
if (paso==="1"){
    return (
        <div  >
            <p >
                <code className="App-headerPLS">Paso 1: Cliente </code> 
                <code className="App-headerP">Paso 2: Automotor </code>
                <code className="App-headerP">Paso 3: Servicios </code>
                <code className="App-headerPR">Paso 4: Orden </code>
            </p>
         </div>
    );
}

if (paso==="2"){
    return (
        <div  >
            <p >
                <code className="App-headerPL">Paso 1: Cliente </code> 
                <code className="App-headerPS">Paso 2: Automotor </code>
                <code className="App-headerP">Paso 3: Servicios </code>
                <code className="App-headerPR">Paso 4: Orden </code>
            </p>
         </div>
    );
}

if (paso==="3"){
    return (
        <div  >
            <p >
                <code className="App-headerPL">Paso 1: Cliente </code> 
                <code className="App-headerP">Paso 2: Automotor </code>
                <code className="App-headerPS">Paso 3: Servicios </code>
                <code className="App-headerPR">Paso 4: Orden </code>
            </p>
         </div>
    );
}

if (paso==="4"){
    return (
        <div  >
            <p >
                <code className="App-headerPL">Paso 1: Cliente </code> 
                <code className="App-headerP">Paso 2: Automotor </code>
                <code className="App-headerP">Paso 3: Servicios </code>
                <code className="App-headerPRS">Paso 4: Orden </code>
            </p>
         </div>
    );
}


}

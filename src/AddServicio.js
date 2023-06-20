import { useState } from 'react';

export default function AddServicio( { onPaginaAutomotor , onAddServicio , aceite1 ,freno1, alineacion1, electrico1, suspension1 } ) {
    const [aceite, setAceite] = useState(aceite1);  
    const [freno, setFreno] = useState(freno1);
    const [alineacion, setAlineacion] = useState(alineacion1);
    const [electrico, setElectrico] = useState(electrico1);
    const [suspension, setSuspension] = useState(suspension1);
    
    
    return (
      <>
      <label >
        Cambio de Aceite   :
          <input
              type="checkbox"
              defaultChecked={aceite}
              onChange={(e) => setAceite(e.target.checked)}
          />
       </label>
       <br />
       <label >
        Cambio  de Frenos   :
          <input
              type="checkbox"
              defaultChecked={freno}
              onChange={(e) => setFreno(e.target.checked)}
          />
       </label>
       <br />
    
       <label placeholder="Alineación y Balanceo">
       Alineación Balanceo:
          <input
              type="checkbox"
              defaultChecked={alineacion}
              onChange={(e) => setAlineacion(e.target.checked)}
          />
       </label>
       <br />

       <label placeholder="Sistema Electrico">
       Sistema de Electrico:
          <input
              type="checkbox"
              defaultChecked={electrico}
              onChange={(e) => setElectrico(e.target.checked)}
          />
       </label>
       <br />

       <label placeholder="Sistema Suspensión">
       Sistema  Suspensión:
          <input
              type="checkbox"
              defaultChecked={suspension}
              onChange={(e) => setSuspension(e.target.checked)}
          />
       </label>
       <br />
 
          <br />
      
          <button
                  onClick={() => {
                    onPaginaAutomotor();
  
                  }}>
                  Atras
          </button>
          <button
                  onClick={() => {
                    onAddServicio({ aceite ,freno, alineacion, electrico, suspension   });

                  }}>
                  Orden
          </button>
  
      </>
    );
  
  }
  
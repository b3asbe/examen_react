import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Encabezado from "./componente/Encabezado";
import Cuerpo from "./componente/Cuerpo";
import Carusel from "./componente/Carusel";
import './js/app.js';
function App()
{

  return(
    <>
    <body>
    <div class="container">
    <Encabezado/>
    <Carusel/>
    <Cuerpo/>
    </div>
    </body>
    </>
  )
  
  
}

export default App;
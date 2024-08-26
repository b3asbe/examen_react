import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Encabezado from "./componente/Encabezado";
import Cuerpo from "./componente/Cuerpo";
import Carusel from "./componente/Carusel";
import Pie from "./componente/Pie.jsx";
function App()
{

  return(
    <>
    <body>
    <div class="container">
    <Encabezado/>
    <Carusel/>
    <Cuerpo/>
    <Pie/>
    </div>
    </body>
    </>
  )
  
  
}

export default App;
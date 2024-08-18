import { Fragment } from "react";
import './componente/Encabezado';
import Encabezado from "./componente/Encabezado";
import Cuerpo from "./componente/Cuerpo";
import Pie from "./componente/Pie";
import './componente/Estilo.css';
function App()
{

  return(
    <>
    <Encabezado/>
    <Cuerpo/>
    <Pie/>
    </>
  )

}

export default App;
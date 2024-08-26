import { Fragment } from "react";
import Formulario from "./componente/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div className="container containmer-fluid">
        <br />
        <br />
        <h1>Ingresa tus datos</h1>
        <Formulario />
      </div>
    </>
  );
}

export default App;

import { Fragment } from "react";

function Cuerpo(){
    return(
        <>
        <div class="contact-section">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7wtk450ynUQFodBhaP418ooPHghkmEsVmmpgpWGIVuPj4AmgxGBYs1y7_zDto6FXD_6aVTpUHpJroSoB6eXjTmM2_HuU59_xvQfsofURj73cry4J0mtnDgT2yzMB5U6ir__9RVFn-9EjfC4KVh86aeJSFHrMNlfzLXQ31HztgRFdVZJ7217fdNbfASgY/s320/fondo.jpg"
            alt="Form Image" class="form-image" />
        <div class="contact-form">
            <h2>CONTÁCTANOS PARA PODER AYUDARTE:</h2>
            Nombres y apellidos
            <input type="text" placeholder="Nombres y apellidos" required/>
            Correo electrónico
            <input type="email" placeholder="Correo electrónico" required/>
            Qué lugar y cuando te interesa conocer

            <textarea placeholder="Cuéntanos donde será tu próxima aventura turística " rows="4" required></textarea>
            <button type="submit">Enviar</button>
        </div>

    </div>
    <div class="footer">
        <p>Fecha: 27/08/2024 &nbsp; | &nbsp; Hora: 4:15:25</p>
    </div>
        </>
    )
}

export default Cuerpo;
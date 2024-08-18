import { Fragment } from "react";


function Encabezado() {
    return (

        <>
        <header class="header">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuORZ87yfKblcAH6BFqtqMvF3u81CHh1DGN_aWf7em60NM7kXm54MFi7MrS7djD0Onh7LXw59E6R-0Gx8ButXsUsktoJV0pvXC2lGrNJCgZApzUYrt27mlUfJkvjfP6xQac-_aQFxaAi0CoEL0pPQZKfpo3M6h6iIPTM0XN7Ml0QgbWBZjc6LOPmynp6c/s1600/logo.jpg" alt="Deli Pizza Logo" class="logo" />
        <nav class="nav">
            <button class="nav-button">Acerca de nosotros</button>
            <button class="nav-button">Pizzas</button>
            <button class="nav-button">Complementos</button>
            <button class="nav-button">Tiendas</button>
            <button class="nav-button">Ordena aquí</button>
        </nav>
        <div class="search-bar">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Busca tu pizza" />
        </div>
    </header>

        </>
 );
}

export default Encabezado;

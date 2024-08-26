import React, { useState, useEffect } from 'react';

function Pie() {
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFecha(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const formatearFecha = (fecha) => {
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
        const año = fecha.getFullYear();
        return `${dia}/${mes}/${año}`;
    };

    const formatearHora = (fecha) => {
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        const segundos = String(fecha.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    };

    return (
        <div className="footer">
            <p>Fecha: {formatearFecha(fecha)} &nbsp; | &nbsp; Hora: {formatearHora(fecha)}</p>
        </div>
    );
}

export default Pie;

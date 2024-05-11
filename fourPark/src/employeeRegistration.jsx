import React from 'react';
import logo from './assets/img/logo.png';

const employeeRegistration = () => {
    return (
    <div className="employeeRegistration">
        <img src={logo} alt="Four Parking logo" />
        <h2>Regístrate/Funcionario</h2>
        <form>
        <input type="email" placeholder="Correo Electrónico" required /><br></br>
        <input type="text" placeholder="Nombre" required /><br></br>
        <input type="text" placeholder="Apellido" required /><br></br>
        <input type="text" placeholder="Código" required /><br></br>
        <input type="password" placeholder="Contraseña" required /><br></br><br></br>
        <button type="submit">Regístrate</button>
        </form>
        <p>¿Ya tienes una cuenta? <a href="/IniSe.jsx">Inicia sesión</a></p>
    </div>
    );
};

export default employeeRegistration;

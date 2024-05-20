import React from 'react';
import logo from './assets/img/logo.png';

import { useNavigate } from 'react-router-dom';

const EmployeeRegistration = () => {
    const navigate = useNavigate(); // Get useNavigate hook instance

const handleLoginClick = () => {
    navigate('/agregarParqueadero'); // Navigate to '/inise' when clicked
};
    return (
        
        <div className="employeeRegistration">
            <div className='logo-container'>
                <img src={logo} alt="Four Parking logo" className='logo' />
            </div>
            <div className='form-container'>
            <div className='form-content'>
                <h2>Regístrate/Funcionario</h2>
                
                <form>
                    <input type="email" placeholder="Correo Electrónico" required className='input-field' /><br />
                    <input type="text" placeholder="Nombre" required className='input-field'/><br />
                    <input type="text" placeholder="Apellido" required className='input-field' /><br />
                    <input type="text" placeholder="Código" required /><br className='input-field' />
                    <input type="password" placeholder="Contraseña" required /><br className='input-field' /><br />
                    <button type="submit" className='registerF-button'>Regístrate</button>
                </form>
               
                <p>¿Ya tienes una cuenta? <button onClick={handleLoginClick} className='rout-buttonER'>Inicia sesión</button></p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeRegistration;




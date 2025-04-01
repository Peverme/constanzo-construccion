import React from 'react';
import './AboutUs.css';
import imagen1 from './assets/imagen 1.jpg';

const AboutUs =() => {
    return (
        <div className='card-container' id='sobre_nosotros'>
            <div className='card-content'>
                <div className='card-texto'>
                    <h2>Quienes Somos</h2>
                    <p>Soy Carlos Constanzo, fundador y único responsable de Constanzo Construcción, una empresa
                    dedicada a ofrecer servicios de construcción de alta calidad. Con 20 años de 
                    experiencia en el sector, me especializo en proyectos residenciales, garantizando un enfoque 
                    personalizado en cada obra que realizo. Mi prioridad es satisfacer las necesidades de mis 
                    clientes a través de un trabajo minucioso, siempre cumpliendo con los más altos estándares 
                    de seguridad y eficiencia.</p>
                </div>
                <div className='card-image'> 
                    <img src={imagen1} alt="Equipo de Construcción"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
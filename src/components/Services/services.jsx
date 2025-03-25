import React from "react";
import './services.css'
import remodelacion from './assets/remodelacion.png'
import soldadura from './assets/soldadura.png'
import gasfiteria from './assets/gasfiteria.png'
import electricidad from './assets/electricidad.png'
import piscina from './assets/piscina.png'
import ceramica from './assets/ceramica.png'

const services = [
    {
        id: 1,
        title: "Remodelaciones",
        description: "Transformamos y optimizamos espacios, mejorando su funcionalidad, estética y valor, adaptados a las necesidades del cliente.",
        image: remodelacion
    },
    {
        id: 2,
        title: "Soldadura",
        description:"Ofrecemos soluciones precisas y seguras en la unión de metales, garantizando calidad y resistencia en cada proyecto.",
        image: soldadura
    },
    {
        id: 3,
        title: "Gasfiteria",
        description: "Realizamos instalaciones y reparaciones eficientes en sistemas de agua y gas, utilizando materiales de calidad como PPR, cobre y PVC, garantizando durabilidad y seguridad.",
        image: gasfiteria
    },
    {
        id: 4,
        title: "Electricidad",
        description: "Ofrecemos instalaciones y mantenimientos eléctricos seguros y eficientes, cumpliendo con normativas y garantizando un servicio confiable para cada proyecto.",
        image: electricidad
    },
    {
        id: 5,
        title: "Instalación de Piscinas",
        description: "Diseñamos e instalamos piscinas a medida, garantizando calidad en cada detalle, desde la estructura hasta los sistemas de filtración, para crear espacios de recreación duraderos y personalizados.",
        image: piscina

    },
    {
        id: 6,
        title: "Revestimiento",
        description: "Ofrecemos instalación de cerámica, porcelanato, piso flotante y piso vinílico, garantizando acabados de alta calidad que mejoran la estética, protección y durabilidad de cualquier espacio.",
        image: ceramica
    }
];

const ServiceCard = ({title, description, image})=>(
<div className="card">
    <div className="card-img-container>">
    <img src={image} className="card-img-top" alt={title} />
    </div>
    <div className="card-body">
        <h5 className= "card-title">{title}</h5>
        <p className="card-text">{description}</p>
    </div>
</div>
);

const Services = () =>(
    <section id="servicios">
        <h2 className="section-title">Servicios</h2>
    <div className="d-flex justify-content-around flex-wrap">
        {services.map(services =>(
            <ServiceCard
            key={services.id}
            title={services.title}
            description={services.description}
            image={services.image}
            />
        ))}
    </div>
    </section>
);

export default Services;

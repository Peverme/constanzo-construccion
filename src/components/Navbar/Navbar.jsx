import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <Link className="navbar-brand" to="#">
            <img className= "logotipo" src={logo} width="150" alt="logo"/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link" href="#sobre_nosotros">Quienes Somos</a>
                <a className="nav-link" href="#servicios">Servicios</a>
                <a className="nav-link" href="#proyectos">Proyectos</a>
                <a className="nav-link" href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
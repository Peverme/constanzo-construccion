import React from 'react';
import './Footer.css'

const Footer =()=>{
return(
<footer id='contacto'>
<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Realiza tu cotización !!!
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title" id="exampleModalLabel">Rellena este formulario y nosotros te contactamos!!!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form action="https://formsubmit.co/peverme1995@gmail.com" method="POST" autoComplete='off'>
          <div className='input-group'>

            <input type="text" name="name" placeholder="Nombre"/>
            <input type="tel" name="phone" placeholder="Teléfono"/>
            <input type="email" name="email" placeholder="Correo"/>
            <input type="text" name="budget" placeholder="Presupuesto"/>

            <textarea name="message" cols="30" rows="5" placeholder='Mensaje'></textarea>
            <input className="btn" type="submit" value="Enviar"/>

            <input type="hidden" name='_next' value='http://localhost:3000/?name=&phone=&email=&budget=&message='/>
            <input type="hidden" name= "_captcha" value="false" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<div className="footer-info"> 
        <p>Contacto Empresa: <br />carlosconstanzo106@gmail.com | Tel: +56 9 7187 7110</p>
        <p>Desarrollado por <strong>Pedro Vergara</strong> © 2024</p>
      </div>
</footer>
);
};
export default Footer;
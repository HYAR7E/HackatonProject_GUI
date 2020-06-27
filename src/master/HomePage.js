import React from 'react'

// Components to import
import FacebookLoginWrapper from './Login';
import {CompanyIcon} from './extra/Extra'


// Inicio (informacion sobre el sistema, objetivo, Login)
const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-inner bg-brand-gradient">
        <div className="page-content-wrapper bg-transparent m-0" style={style.style_pagecontent}>
          <div className="height-10 w-100 shadow-lg px-4 bg-brand-gradient" style={style.style_pageheader}>
            <PageHeader />
          </div>
          <div className="flex-1">
            <div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
              <div className="row">
                <div className="col col-md-6 col-lg-7 hidden-sm-down">
                  <PageInfo />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 ml-auto">
                  <LoginForm />
                </div>
              </div>
              <FooterInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Child Components
const PageInfo = () => {
  return (
    <div>
      <h2 className="fs-xxl fw-500 mt-4 text-white">
        Colaboración en la UNHEVAL
        <small className="h3 fw-300 mt-3 mb-5 text-white opacity-90">
        Ayuda a los estudiantes a generar ingresos a partir de sus conocimientos actuales. <br/>
        Necesitas ayuda con algún curso?
        Necesitas apoyo en algo que alguien de otra carrera podría ayudarte? <br/>
        Confía en tus colegas de la UNHEVAL y ayudanos a formar una comunidad de profesionales conectados
        </small>
      </h2>
      <a href="/nosotros" className="fs-lg fw-500 text-white opacity-70">Ver más &gt;&gt;</a>
      <div className="d-sm-flex flex-column align-items-center justify-content-center d-md-block">
        <div className="px-0 py-1 mt-5 text-white fs-nano opacity-50">
          Siguenos en las redes sociales
        </div>
        <SocialMediaContact />
      </div>
    </div>
  )
}
const FooterInfo = () => {
  return (
    <div className="position-absolute pos-bottom pos-left pos-right p-3 text-center text-white">
      2020 © RS_Medusa desarrollado por &nbsp;<a href="https://github.com/HYAR7E/HackatonProject_GUI" className="text-white opacity-40 fw-500" title="los_magios_inc" target="_blank">Los Magios</a>
    </div>
  )
}
const SocialMediaContact = () => {
  return (
    <div className="d-flex flex-row opacity-70">
      <a href="#" className="mr-2 fs-xxl text-white">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href="#" className="mr-2 fs-xxl text-white">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a href="#" className="mr-2 fs-xxl text-white">
        <i className="fab fa-google-plus-square"></i>
      </a>
      <a href="#" className="mr-2 fs-xxl text-white">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  )
}
const PageHeader = () => {

  return (
    <div className="d-flex align-items-center container p-0">
      <div className="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9">
        <a href="/home" className="page-logo-link press-scale-down d-flex align-items-center">
          <CompanyIcon width="35px" />
          <span className="page-logo-text mr-1">RS Medusa</span>
        </a>
      </div>
    </div>
  )
}
const LoginForm = () => {
  return (
    <div className="card" style={style.style_loginform_card}>
      <div className="card-body" style={style.style_loginform_title}>
        Registrarse es muy sencillo!
      </div>
      <div className="card-body">
        <FacebookLoginWrapper />
      </div>
    </div>
  )
}

// Styles
let style = {
  style_pagecontent: {
    background: 'url("https://i.ytimg.com/vi/dBoj9G-Wkws/maxresdefault.jpg")',
    backgroundSize: "cover",
  },
  style_pageheader: {
    backgroundColor: "#1f3b6d85",
  },
  style_loginform_card: {
    backgroundColor: "#031733ad",
  },
  style_loginform_title: {
    color: "white",
    fontSize: "1.6em",
    fontWeight: "bold"
  },
}


export default HomePage;

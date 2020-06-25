import React from 'react'


// Inicio (informacion sobre el sistema, objetivo, Login)
const HomePage = () => {
  return (
    <div className="row" style={style_container}>
      <div className="col-lg-7">
        <div style={style_logotitle}>
          <LogoTitle />
        </div>
        <div style={style_testdiv1}>
          <Content />
        </div>
      </div>
      <div className="col-lg-5" style={style_testdiv2}>
        <FacebookLogin />
      </div>
    </div>
  )
}

// Child Components
const LogoTitle = () => {
  return (
    <div>
      <h1>ATime</h1>
      <h3>Sistema de control de evaluaciones online</h3>
    </div>
  )
}
const Content = () => {
  return (
    <div style={style_content}>
      <h3>Colaboración en la UNHEVAL</h3>
      <ProjectInfo />
    </div>
  )
}
const ProjectInfo = () => {
  return (
    <h1>Ayuda a los estudiantes a generar ingresos a partir de sus conocimientos actuales</h1>
  )
}
const FacebookLogin = () => {
  return "FacebookLogin"
}

// Styles
let style_container = {paddingLeft: "45px", paddingRight: "45px", paddingTop: "45px"}
let style_testdiv1 = {background: "tomato"}
let style_testdiv2 = {background: "darkgreen"}
let style_logotitle = {paddingLeft: "25px", paddingBottom: "65px"}
let style_content = {height: "400px"}


export default HomePage;

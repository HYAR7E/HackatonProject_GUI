import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Switch,  // Allow to change only content
  Route,  // Route handling
  Redirect,  // Redirect url
  Link,  // Alternative to HTML element 'a'
  withRouter,  // Allow us access to route props
} from "react-router-dom";  // https://reacttraining.com/react-router/web/api/

// Components to import
import HomePage from './HomePage';
import Register from './Register';
import Ranking from './Ranking';
import Us from './us/Us';
import MenuPrincipal from './logged/HomePage';


const Navigation = () => {
  // Bypass User layer deep:1

  return (
    <main id="js-page-content" role="main">
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/registro">
          <Register />
        </Route>
        <Route path="/nav/">
          <MenuPrincipal />
        </Route>
        <Route exact path="/ranking">
          <Ranking />
        </Route>
        <Route exact path="/nosotros">
          <Us />
        </Route>

        {/* Default Route */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </main>
  )
}

/*
- Inicio (informacion sobre el sistema, objetivo, Login)
- Login (login by FB) (login como cliente|colaborador)
- Menu Principal (cliente|colaborador) (links a las funciones)
- Crear Oferta de trabajo (añadir tags)
- Mi perfil: Usuario (Crear oferta de trabajo, mis chats)
- Mi perfil: Colaborador (mis trabajos, mis postulaciones, configuracion)
- Mis notificaciones (nuevas OdT, resultado de postulaciones)
- Lista de ofertas de trabajo (colaborador) (segun tags)
- Chats (lista de chats ordenados por más recientes)
*/
export default Navigation

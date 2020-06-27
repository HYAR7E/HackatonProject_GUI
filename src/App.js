import React from 'react'
import {
  BrowserRouter as Router,  // Router needed && Allow history of visited pages
} from "react-router-dom";  // https://reacttraining.com/react-router/web/api/

// Components to import
import Navigation from './master/Navigation'


const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  )
}

export default App;

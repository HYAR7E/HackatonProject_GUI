import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const FacebookLoginWrapper = props => {

  const handleFBResponse = res => {
    console.log("RESPONSE", res);
  }

  return (
    <FacebookLogin
      appId="271365714103016"
      callback={handleFBResponse}
      fields="name,email,picture"
      render={() => (
        <button className="btn btn-info btn-block btn-lg waves-effect waves-themed">
          Ingresar con Facebook
        </button>
      )}/>
  )
}


export default FacebookLoginWrapper

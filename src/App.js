import React, { useState } from 'react';


const App = () => {
  const [variable, setVariable] = useState(0);
  let i = 0;

  const contadorVar = () => {
    setVariable(variable+1);
  }
  const contadorI = () => {
    i++;
  }

  console.log("Variable: ", variable, "||", "I: ", i)
  return (
    <div>
      <h1 id="msg">CONTADOR V: {variable}</h1>
      <h1 id="msg">CONTADOR I: {i}</h1>

      <button
        className="btn btn-primary waves-effect waves-themed"
        onClick={() => contadorVar()}>
          CAMBIAR VARIABLE
      </button>

      <button
        className="btn btn-primary waves-effect waves-themed"
        onClick={() => contadorI()}>
          CAMBIAR I
      </button>
    </div>
  );
}

export default App;

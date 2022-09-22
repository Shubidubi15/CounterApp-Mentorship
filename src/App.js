import "./App.css";
import { useState } from "react";
import CounterText from "./components/CounterText";
import CounterActions from "./components/CounterActions";

//Al utilizar el paquete de Bootstrap en la app, como aqui, para que el proyyecto lo pueda tomar
// es importante recordar hacer el import de boostrap en el archivo Index.js

function App() {

  //Creamos la variable de estado, y la funcion que la actualiza utilizando useState y su estado inicial como parametro.
  const [count, setCount] = useState(0);

  //Creamos los metodos para aumentar o bajar el contador, necesitamos utilizar la funcion creada arriba para
  // poder manipular el estado, de otra manera no funciona y puede causar errores en la app.
  const decreaseCounter = () => {
    setCount(count - 1);
  };

  const increaseCounter = () => {
    setCount(count + 1);
  };

  //Pasamos las propiedades a los componentes hijos, esto se ahce asignandolas como si fueran attributos de HTML
  // pero su valor va entre llaves {}

  //Es importante recordar que para poder retornar un HTML grande, necesitamos encerrar todo con un <div>
  // y poner todo dentro de () frente al return.
  return (
    <div className="App">
      <CounterText count={count} />
      <CounterActions
        increaseClick={increaseCounter}
        decreaseClick={decreaseCounter}
      />
    </div>
  );
}

export default App;

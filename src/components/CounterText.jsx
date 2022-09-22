import "./CounterText.css";

//Creamos un componente cuya funcion es unicamente mostrar data, a estos se les conoce como
// stateless o presentation components, por que no manejan estados, solo muestra info

//El valor del contador lo vamos a recibir a traves de las props enviadas desde el componente padre (App.js)
const CounterText = (props) => {
    return <p className="app-counter-text">Contador: {props.count}</p>
}

//Exportamos el componente, importante, el nombre del componente debe empezar con mayusculas por buenas practicas
export default CounterText;
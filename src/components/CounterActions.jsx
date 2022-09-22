import "./CounterActions.css";
import Button from "react-bootstrap/Button";

//Para este componente vamos a recibir los metodos que ejecutan los botones al darles clic de igual forma por las props
// esto es por que el estado vive en el componente padre, y no lo podemos modificar desde el hijo
// entonces recibimos los metodos para "mandar" la data por ahi al estado del componente padre
const CounterActions = (props) => {
    return (
        <div className="app-actions">
            <Button variant="primary" onClick={props.increaseClick}>Sumar</Button>
            <Button variant="danger" onClick={props.decreaseClick}>Restar</Button>
        </div>
    );
}

export default CounterActions;

/* IMPORTANTE 
En caso de necesitar enviar info o un valor a la funcion que recibimos desde props, es importante no escribirlo asi:
    <Button variant="primary" onClick={props.increaseClick(someValue)}>Sumar</Button>

Al escribirlo de esta manera, la funcion se ejecuta cuando se crea el componente, y no cuando se da clic en el boton
La forma correcta seria:
    <Button variant="primary" onClick={() => props.increaseClick(2)}>Sumar</Button>

    al ponerlo dentro de una funcion anonima, no se ejecuta inmediatamente y se asigna de forma correcta.
*/
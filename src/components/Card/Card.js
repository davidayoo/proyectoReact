import './Card.css'


export default function Card(props){

    return(
        <div className="card-item">
            <h2>{props.title}</h2>
            <p>Precio: ${props.price}</p>
            <p>Marca: {props.marca}</p>
            <button>Comprar</button>
        </div>
    )
}
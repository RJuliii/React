import "./Titulo.css"

function Titulo(props) { // prop 
    console.log(props)
    return (
        <div className="container-title">
            <h1 className="title">
                {props.titulo}
            </h1>
            <h2 className="subtitle">
                {props.subtitulo}
            </h2>
        </div>
    )
}

export default Titulo
function Titulo(props) { // prop 
    console.log(props)
    return (
        <div className="title">
            <h1>
                {props.titulo}
            </h1>
            <h2>
                {props.subtitulo}
            </h2>
        </div>
    )
}

export default Titulo
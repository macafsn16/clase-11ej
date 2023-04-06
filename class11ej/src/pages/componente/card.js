export default function Card( {data} ) {
    return(
        <div className="card">
            <h1>{ data.titulo}</h1>
            <h2>{data.instruccion} </h2>
            <img src={data.imagen} alt="100" width="100" height="150" />
            <br></br>
            <span>
                { data.text }
            </span>
        </div>
        );
}

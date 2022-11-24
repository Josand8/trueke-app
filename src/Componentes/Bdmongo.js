import { useState } from "react"
import ArticulosLog from "./ArticulosLog"
import ArticulosSinLog from "./ArticulosSinLog"

const Bdmongo=()=>{

    const [todo,settodo]=useState([])

    const var_datos=()=>{
        fetch('http://localhost:5000/servicios/todo')
            .then(res=>res.json())
            .then(datos2=>settodo(datos2))
    }

    var_datos()
    let mostrar=todo.map((dato)=>{
        return(
            <ArticulosLog nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} cartaACambio={dato.cartaACambio} usuario={dato.usuario} contacto={dato.contacto} id={String(dato._id)} />
        );
    })

    return (
        <div className="row">
            {mostrar}
        </div>
    );

    // var_datos()
    // //console.log(todo)
    // return(
    //     <div>
    //         {todo.map(dato=>{
    //             return (
    //                 <ArticulosLog nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} cartaACambio={dato.cartaACambio} usuario={dato.usuario} contacto={dato.contacto}/>
    //                 // <article className="coaster-card">
    //                 //     <h1>{eachtodo.nombre}</h1>
    //                 // </article>
    //             )
    //         })}
    //     </div>
    // )
}

export default Bdmongo
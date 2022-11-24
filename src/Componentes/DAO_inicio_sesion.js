import { useState } from "react"
import axios from "axios"

const DAO_inicio_sesion=(props)=>{
    
    const [todo,settodo]=useState([])
    
    const var_datos=()=>{

        fetch('http://localhost:5000/usuarios/inicio')
            .then(res=>res.json())
            .then(datos2=>settodo(datos2))
    }

    var_datos()
    let mostrar=todo.map((dato)=>{
        return(
           <div></div> 
        );
    })
    return(
        <div className="row">
            {mostrar}
        </div>
    )
}

export default DAO_inicio_sesion
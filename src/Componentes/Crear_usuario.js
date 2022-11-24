import React,{Component} from "react";
import axios from "axios";

class Crear_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            correo:"",
            contrasena:"",
            cont2:""
        }
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        //alert("Creando usuario...");
        axios.post('http://localhost:5000/usuarios/nuevo',this.state)
            .then(console.log("Creado"))
        alert('Usuario creado exitosamente...')
        this.setState({nombre:""})
        document.getElementById("nombre").value=""
        document.getElementById("correo").value=""
        document.getElementById("contrasena").value=""
        document.getElementById("cont2").value=""
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-primary mt-4 mb-4 border-white">
                <h1 className="m-auto text-white">Mis datos</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre de usuario" name="nombre" onChange={this.cambio} className="form-control" id="nombre"/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="email" placeholder="Correo" name="correo" className="form-control mt-3" onChange={this.cambio} id="correo"/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Contraseña" name="contrasena" className="form-control mt-3" onChange={this.cambio} id="contrasena"/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Repetir Contraseña" name="cont2" className="form-control mt-3" onChange={this.cambio} id="cont2"/>   
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-dark" type="button" onClick={this.guardar}>Crear mi cuenta</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Crear_usuario;
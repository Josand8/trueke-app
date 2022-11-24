import React,{Component} from "react";
import axios from "axios";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            cantidad:0,
            imagen:"",
            usuario:"",
            contacto:0,
            cartaACambio:""
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
        //alert("Publicando tarjeta...");
        axios.post('http://localhost:5000/servicios/nuevo',this.state)
            .then(console.log("Creado"))
        alert('Articulo creado')
        this.setState({nombre:""})
        document.getElementById("nombre").value=""
        document.getElementById("descripcion").value=""
        document.getElementById("cantidad").value=""
        document.getElementById("imagen").value=""
        document.getElementById("usuario").value=""
        document.getElementById("contacto").value=""
        document.getElementById("cartaACambio").value=""
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-primary mt-4 mb-4 border-black">
                <h1 className="m-auto text-white">Datos de tu tarjeta Pokemon</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre del Pokemon" name="nombre" onChange={this.cambio} className="form-control" id="nombre"/>   
                    </div>
                    <h5 className="text-white mt-2 ms-2">Estado de la tarjeta: </h5>
                    <div className="form-group">
                        <select name="descripcion" className="form-control mt-3" id="descripcion" onChange={this.cambio}>
                            <option></option>
                            <option>Lámina en buen estado</option>
                            <option>Lámina desgastada</option>
                            <option>Lámina rasgada</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad que tienes de esta misma tarjeta" name="cantidad" className="form-control mt-3" id="cantidad" onChange={this.cambio}/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="text" placeholder="Carga tu imagen en la web e ingresa el link aquí" name="imagen" className="form-control mt-3" id="imagen" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Ingresa tu nombre de usuario" name="usuario" className="form-control mt-3" id="usuario" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Número de contacto" name="contacto" className="form-control mt-3" id="contacto" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Carta que quieres a cambio" name="cartaACambio" className="form-control mt-3" id="cartaACambio" onChange={this.cambio}/>   
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-dark" type="button" onClick={this.guardar}>Publicar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;
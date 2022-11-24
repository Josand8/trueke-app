import React,{Component} from "react";
import axios from "axios";

class Editar extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            imagen:"",
            contacto:"",
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
                <h1 className="m-auto text-white">Edita los datos de tu tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre del Pokemon" name="nombre" id="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad que tienes de esta misma tarjeta" name="cantidad" id="cantidad" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="text" placeholder="Carga tu imagen en la web e ingresa el link aquí" name="imagen" id="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-white mt-2 ms-2">Estado de la tarjeta: </h5>
                    <div className="form-group">
                        <select name="descripcion" id="descripcion" className="form-control mt-3" onChange={this.cambio}>
                            <option>Lámina en buen estado</option>
                            <option>Lámina desgastada</option>
                            <option>Lámina rasgada</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-dark" type="button" onClick={this.guardar}>Publicar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Editar;
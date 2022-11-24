import React, { Component } from "react";
import axios from "axios";
import Editar from "./EditarFormulario";
import Formulario from "./Formulario";

class ArticulosLog extends Component {
    
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad: 0,
            imagen:"",
            cartaACambio:"",
            id:"",
        }
        this.editar = this.editar.bind(this)
        this.eliminar = this.eliminar.bind(this)
        this.cambio = this.cambio.bind(this)
    }
    botones(usuario,contacto, nombre){
        //Cuando está logueado, la edición y eliminación están disponibles
        if (usuario=="") {
            return (
            <div>
                <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro" + this.props.id}>Editar</button>
                <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
            </div>)
        } else {
            const linkWhatsapp = `https://wa.me/57${this.props.contacto}?text=Hola,%20¿todavía%20te%20interesa%20cambiar%20la%20tarjeta%20de%20${this.props.nombre}?`;
            return (<a formTarget="#formulario1" className="btn btn-success border mx-auto mt-1" href={linkWhatsapp}>Contactar por whatsapp</a>)
        }
    }

    editar(e){
        // alert("Solicitando editar tarjeta al backend...");
        this.setState({
            id: e.target.name
        })
        // alert("Se actualizo con exito")
        axios.post("http://localhost:5000/servicios/actualizar", this.state)
    }

    eliminar(e){
        //alert('Solicitando eliminar tarjeta al backend...')
        let direccion = "http://localhost:5000/servicios/eliminar/" + e.target.name
        axios.get(direccion)
            .then(dato => alert("Se elimino el articulo con ID:" + e.target.name))
    }

    cambio(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
 
    
    render() {

        return (

            <><div className="col-sm-4 text-center">
                <div className="card mt-4 bg-dark b border-red">
                    <img height="300" width="100" src={process.env.PUBLIC_URL + this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">

                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span>Cambio por: {this.props.cartaACambio}</span>
                        <br />
                        <span>Usuario: {this.props.usuario}</span>
                        <br />
                        <span>Contáctame al: {this.props.contacto}</span>
                        <br />
                        <span>Cantidad: {this.props.cantidad}</span>
                        <br />
                        {this.botones(this.props.usuario, this.props.contacto)}
                        <br/>

                        {/* <button className="btn btn-success border mx-auto mt-1" onClick={this.contacto}>Contactar por whatsapp</button><br/> */}
                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro" + this.props.id}>Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                    </div>
                </div>
            </div>

                {/* Eliminar  */}
                <div className="modal fade" id={"articulo" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                                ¿Desea eliminar el articulo {this.props.id}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Editar  */}
                <div className="modal fade" id={"editar_cuadro" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Articulo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Nombre</label>
                                        <input type="text" className="form-control" id="recipient-name" name="nombre" defaultValue={this.props.nombre} onChange={this.cambio}/>
                                    </div>;
                                    <div className="mb-1">
                                        <label for="message-text" className="col-form-label text-dark text-st">Descripción</label>
                                        <div className="form-group">
                                            <select name="descripcion" className="form-control" text={this.props.descripcion} onChange={this.cambio}>
                                                <option>Lámina en buen estado</option>
                                                <option>Lámina desgastada</option>
                                                <option>Lámina rasgada</option>
                                            </select>
                                        </div>
                                        {/* <textarea className="form-control" id="message-text" name="descripcion" value={this.props.descripcion} onChange={this.cambio}></textarea> */}
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Cantidad</label>
                                        <input type="number" className="form-control" id="recipient-name" name="cantidad" defaultValue={this.props.cantidad} onChange={this.cambio}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Imagen</label>
                                        <input type="text" className="form-control" id="recipient-name" name="imagen" defaultValue={this.props.imagen} onChange={this.cambio}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Carta a cambio</label>
                                        <input type="text" className="form-control" id="recipient-name" name="cartaACambio" defaultValue={this.props.cartaACambio} onChange={this.cambio}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-success" name={this.props.id} onClick={this.editar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div></>
            
            );
    }
}

export default ArticulosLog;
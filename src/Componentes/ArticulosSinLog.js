import React, { Component } from "react";

class ArticulosSinLog extends Component {
    
    constructor(){
        super();
        this.state={
        }
    }
    botones(usuario,contacto, nombre){
        // Cuando no está logueado, la edición y eliminación no están disponibles
        const linkWhatsapp = `https://wa.me/57${this.props.contacto}?text=Hola,%20¿todavía%20te%20interesa%20cambiar%20la%20tarjeta%20de%20${this.props.nombre}?`;
        return (<a formTarget="#formulario1" className="btn btn-success border mx-auto mt-1" href={linkWhatsapp}>Contactar por whatsapp</a>)
    }
    
    render() {

        return (

            <div className="col-sm-4 text-center">
                <div className="card mt-4 bg-dark b border-red">
                    <img height="300" width="100" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span>Cambio por: {this.props.cartaACambio}</span>
                        <br/>
                        <span>Usuario: {this.props.usuario}</span>
                        <br/>
                        <span>Contáctame al: {this.props.contacto}</span>
                        <br/>
                        <span>Cantidad: {this.props.cantidad}</span>
                        <br/>
                        {this.botones(this.props.usuario,this.props.contacto)}
                    </div>
                </div>

                <div className="modal fade" id="formulario1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default ArticulosSinLog;
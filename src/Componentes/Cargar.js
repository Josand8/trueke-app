import React, { Component, useState } from "react";
import Datos from './Datos.json'
import ArticulosSinLog from './ArticulosSinLog';
import ArticulosLog from "./ArticulosLog";

class Cargar extends Component {
    constructor() {
        super();
        this.state = {Datos}
        console.log(this.state.Datos.length);
    }

    render() {

        let mostrar=this.state.Datos.map((dato)=>{
            // Si está logueado se retorna a ArticulosLog, Si no está logueado se retorna a ArticulosSinLog. Se utiliza 1==1 para aludir al caso en que no está logueado y lo contrario cuando si está logueado. Esto es temporal porque se redirecciona con info del backend
            if(1==2) {
                return(
                    <ArticulosSinLog nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} cartaACambio={dato.cartaACambio} usuario={dato.usuario} contacto={dato.contacto} />
                );
            } else {
                return(
                    <ArticulosLog nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} cartaACambio={dato.cartaACambio} usuario={dato.usuario} contacto={dato.contacto} />
                );
            }
        })

        return (
            <div className="row">
                {mostrar}
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.Datos.length}
                </span>
            </div>
        );
    }
}

export default Cargar;
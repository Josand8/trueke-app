import React, { Component } from "react";
import Cargar from "./Cargar";
import Crear_usuario from "./Crear_usuario";
import Formulario from "./Formulario";
import Inicio_sesion from "./Inicio_sesion";
import Bdmongo from "./Bdmongo";
import Bdmongo_sinlog from "./Bdmongo_nolog";

class Navegacion extends Component {
    render() {
        // Si está logueado se retorna cerrar sesión y publicar tarjeta, Si no está logueado se retorna iniciar sesión y crear usuario. Se utiliza 1==1 para aludir al caso en que no está logueado y lo contrario cuando si está logueado. Esto es temporal porque se redirecciona con info del backend
        if(1==2) {
            return (
                <div>
                    <div className="nav bg-dark d-flex justify-content-center">
                        <ul className="nav nav-tabs nav-pills mt-1 mb-1" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                            </li>
                            <li className="nav-item text-white" role="presentation">
                                <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                            </li>
    
                        </ul>
    
                        <form class="d-flex ms-5" role="search">
                            <input id="criterioDeBusqueda" class="form-control me-2" type="search" placeholder="buscar tarjeta" aria-label="Search" onChange={this.filtrarTarjetas}/>
                        </form>
                    </div>
    
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active text-white" id="enlace1" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            {/* <Cargar/> */}
                            <Bdmongo_sinlog/>
                        </div>
                        <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <Formulario/>
                        </div>
                        <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <Inicio_sesion/>
                        </div>
                        <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                            <Crear_usuario/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="nav bg-dark d-flex justify-content-center">
                        <ul className="nav nav-tabs nav-pills mt-1 mb-1" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                            </li>
                            

                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                            </li>


                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace5}</button>
                            </li>
                        </ul>
    
                        <form class="d-flex ms-5" role="search">
                            <input id="criterioDeBusqueda" class="form-control me-2" type="search" placeholder="Buscar tarjeta" aria-label="Search" onChange={this.filtrarTarjetas}/>
                        </form>
                        {/* <div className="text-primary ms-5 mt-2">
                            Usuario: 
                        </div> */}
                    </div>
    
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active text-white" id="enlace1" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            {/* <Cargar/> */}
                            <Bdmongo/>
                        </div>
                        <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <Formulario/>
                        </div>
                        <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <Inicio_sesion/>
                        </div>
                        <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                            <Crear_usuario/>
                        </div>
                    </div>
                </div>
            );           
        }
    }

    filtrarTarjetas(e){
        
        alert(e.target.value,e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
}

export default Navegacion;
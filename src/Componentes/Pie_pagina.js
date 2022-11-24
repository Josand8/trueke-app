import React, { Component } from "react";
//import logo from "./logo.png";
class Pie_pagina extends Component {
    
    render() {
        
        return (
            <div>
                <div className="b-example-divider"></div>
                
                <div className="d-flex justify-content-center">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img className="bi" width="100" height="auto" src={process.env.PUBLIC_URL+"./Recursos/logo_utp.png"}/>
                            </a>
                            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Pie_pagina;
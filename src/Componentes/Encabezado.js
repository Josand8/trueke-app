import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div >
                <img className="mx-auto d-block mb-0 mt-0" src={process.env.PUBLIC_URL+"./Recursos/header.png"} height="200" width="auto"/>
            </div>
        );
    }
}

export default Encabezado;
import imgEscudo from "../assets/images/escudo_muni.jpg"
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRef, useState } from 'react'
import { login } from "../services/usuarioService";
import { useNavigate } from 'react-router-dom';


export default function LoginView(){    

    const {		
		handleSubmit
	} = useForm();

    const [showError, setShowError] = useState(false);
    const [msgError, setMsgError] = useState("Error de inicio de sesión")

    const navigate = useNavigate();
    const inputLogin = useRef()
    const inputPassword = useRef()

    const ejecutarBusqueda = async () => {
        setShowError(false)
        let usuario = inputLogin.current.value
        let password = inputPassword.current.value
        const resultado = await login(usuario, password)

        if (resultado.estado.trim() !== "OK"){ 
            setMsgError(resultado.estado.trim())          
            setShowError(true)
        }
        else {
            navigate('/buscar_trabajador');
        }
        
        
    }

    

    

    return (
        <div className="d-flex justify-content-center"> 
            <div className="col-sm-12 col-md-3">            
                    <div className="d-flex justify-content-center">
                        <img className="mt-5"
                            src={imgEscudo}                    
                            alt="imagen login"
                        /> 
                    </div>
                    <div className="m-3" >
                        <p className="mt-0 mb-3 text-center">Municipalidad Provincial de Piura</p>
                        <h1 className="h3 mb-4 font-weight-normal text-center">Sistema Integrado de Atención al Ciudadano</h1>
                        
                        <Form onSubmit={handleSubmit(ejecutarBusqueda)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" 
                                    placeholder="Ingrese usuario" 
                                    ref={inputLogin}
                                    required/>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Password" 
                                    ref={inputPassword}
                                    required/>
                            </Form.Group>
                            {
                                showError ? (
                                    <Alert variant={'danger'}>
                                        { msgError }
                                    </Alert>
                                ) : (
                                    <div></div>
                                )
                            }                            
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" type="submit">
                                    Iniciar sesión
                                </Button>                      
                            </div>                                                      
                        </Form>
                    </div>
                    <div>
                        <p className="mt-5 mb-3 text-muted text-center">© Gerencia de Tecnologías y Sistemas de Información</p>
                    </div>
                   
            </div>
        </div>
    )
    
}
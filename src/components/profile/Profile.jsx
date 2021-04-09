import {useEffect, useState } from 'react';
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css';
import {useFirebaseApp} from 'reactfire';
import Swal from 'sweetalert2';


export const Profile = (props) => {
    const firebase = useFirebaseApp();

    const [passwd, setPsswd] = useState();

    useEffect(() => {
        console.log(localStorage.getItem('user'));
        
        axios.get("https://rentopolis.herokuapp.com/home/user/0")
            .then(response => {
                
                let info= response.data;
                document.getElementById("nombre").value = info.name;
                document.getElementById("numero").value = info.phoneNumber;
                document.getElementById("email").value = info.email;
                setPsswd(info.passwd);
            }).catch(error => {
                alert("Fallo de Conexión ");
            });
    },[])

    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(document.getElementById("contraseña").value !== document.getElementById("confirmarContraseña").value){
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Las contraseñas deben ser iguales',
                })
        }else{
            if(document.getElementById("contraseña").value !== ""){
                axios.put('https://rentopolis.herokuapp.com/home/0', {
                    "id": "0",
                    "name": document.getElementById("nombre").value,
                    "phoneNumber": document.getElementById("numero").value,
                    "email": document.getElementById("email").value,
                    "passwd": document.getElementById("contraseña").value
                }).then(function(response){
                    console.log(response);
                })
                
                firebase.auth().currentUser.updatePassword(document.getElementById("contraseña").value);
            }else{
                axios.put('https://rentopolis.herokuapp.com/home/0', {
                    "id":"0",
                    "name": document.getElementById("nombre").value,
                    "phoneNumber": document.getElementById("numero").value,
                    "email": document.getElementById("email").value,
                    "passwd": passwd
                }).then(function(response){
                    console.log(response);
                })
            }
            console.log(firebase.auth().currentUser);
            //firebase.auth().currentUser.updateEmail(document.getElementById("email").value);
            localStorage.setItem('user',document.getElementById("email").value);
            window.location.href = "/inicio";
            
        }
        
    }

    const handleAblePassword = (event) => {
        event.preventDefault();
        if(document.getElementById("contraseña").value !== "" ){
            document.getElementById("confirmarContraseña").disabled=false;
            
        }else{
            document.getElementById("confirmarContraseña").disabled=true;
            document.getElementById("confirmarContraseña").value='';
        }
    }
    

    return (
        <div className="App">
        <section className="header-main border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-4">
                        <a style={{fontSize: 30}} href="/inicio" className="brand-wrap">
                            Rentopolis
                        </a>
                    </div>
                   
                    <div className="col-lg-4 col-sm-6 col-12 last-item">
                        <div className="widgets-wrap float-md-right">

                            <div className="widget-header">
                                <a href="/profile" className="icon icon-sm ">
                                    <AccountCircleIcon style={{fontSize: 40}}/>
                                </a>
                            </div>
                            <div className="widget-header  mr-3">
                                <a href="/" className="icon icon-sm ">
                                    <ExitToAppIcon style={{fontSize: 40}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Perfil:</h2>
                </div>
        </section>
        <section className="section-pagetop">
                <div className="container">
                    <form onSubmit={handleSubmit} >
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" pattern="[a-zA-Z\s]+" placeholder="Ingresa tu nombre" required/>
                                <small id="nombreHelp" className="form-text text-muted">Solo se aceptan letras en este campo.</small>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="numero">Número de teléfono:</label>
                                <input type="text" className="form-control" id="numero"  placeholder="Ingresa número de teléfono" pattern="[0-9]+" minLength="10" maxLength="10" required/>
                                <small id="nombreHelp" className="form-text text-muted">Solo se aceptan números en este campo.</small>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingresa correo electrónico" required/>
                            </div>
                        </div>
                        <div className="form-row margin-div">
                            <div className="form-group col-md-6">
                                <label htmlFor="contraseña">Contraseña nueva:</label>
                                <input type="text" className="form-control" id="contraseña" placeholder="Ingresa contraseña"  minLength="8" onChange={handleAblePassword}/>
                                <small id="contraseñaHelp" className="form-text text-muted">Ingresa contraseña si y solo si deseas cambiarla. Longitud mínima de 8</small>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="confirmarContraseña">Confirmar contraseña nueva:</label>
                                <input type="text" className="form-control" id="confirmarContraseña" placeholder="Ingresa contraseña" disabled/>
                            </div>
                        </div>
                        
                        <div className="row center-div margin-div">

                            <div className="form-group col-md-2">   
                                <button className="btn btn-primary boton-estilo " >Actualizar perfil</button>
                            </div>
                            <div className="form-group col-md-2">
                                <button className="btn btn-primary boton-estilo" >Mis propiedas</button>
                            </div>
                            <div className="form-group col-md-2">
                                <button className="btn btn-primary boton-estilo " >Eliminar perfil</button>
                            </div>

                        </div>
                    </form>
                </div>
        </section>
      </div>
    )
}






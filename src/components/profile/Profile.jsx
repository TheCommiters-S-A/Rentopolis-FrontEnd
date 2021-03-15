import {useEffect } from 'react';
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css';

export const Profile = (props) => {

    useEffect(() => {
        axios.get("https://rentopolis.herokuapp.com/home/user/0")
            .then(response => {
                let info= response.data;
                document.getElementById("nombre").value = info.name;
                document.getElementById("numero").value = info.phoneNumber;
                document.getElementById("email").value = info.email;
            }).catch(error => {
                alert("Fallo de Conexión ");
            });
    })

    return (
        <div className="App">
        <section className="header-main border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-4">
                        <a style={{fontSize: 30}} href="/inicio" className="brand-wrap">
                            Rentopolis
                        </a>
                        <img/>
                    </div>
                   
                    <div className="col-lg-4 col-sm-6 col-12 last-item">
                        <div className="widgets-wrap float-md-right">

                            <div className="widget-header">
                                <a href="/profile" class="icon icon-sm ">
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
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" id="nombre" pattern="[a-zA-Z]+" placeholder="Ingresa tu nombre" required/>
                                <small id="nombreHelp" class="form-text text-muted">Solo se aceptan letras en este campo.</small>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="numero">Número de teléfono:</label>
                                <input type="text" class="form-control" id="numero"  placeholder="Ingresa número de teléfono" pattern="[0-9]+" minLength="10" maxLength="10" required/>
                                <small id="nombreHelp" class="form-text text-muted">Solo se aceptan números en este campo.</small>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="exampleInputEmail1">Correo Electrónico:</label>
                                <input type="email" class="form-control" id="email" placeholder="Ingresa correo electrónico" required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1">Contraseña Nueva:</label>
                                <input type="text" class="form-control" id="contraseña" placeholder="Ingresa contraseña"  minLength="8"/>
                                <small id="contraseñaHelp" class="form-text text-muted">Ingresa contraseña si y solo si deseas cambiarla. Longitud mínima de 8</small>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1">Confirmar contraseña Nueva:</label>
                                <input type="text" class="form-control" id="confirmarContraseña" placeholder="Ingresa contraseña"/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Terminar</button>
                    </form>
                </div>
        </section>
      </div>
    )
}



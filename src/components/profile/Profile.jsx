
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css';



export const Profile = (props) => {
    
    

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
                    <form  >
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
                                <input type="text" className="form-control" id="contraseña" placeholder="Ingresa contraseña"  minLength="8" />
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






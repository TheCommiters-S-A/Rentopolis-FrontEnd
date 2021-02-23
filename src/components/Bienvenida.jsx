import React from 'react';

export const Bienvenida = (props) => {
    return (

        <div>
            <div id="preloader"></div>

            <section id="hero">
                <div className="hero-container">
                    <div className="fadeIn">
                        <div className="hero-logo">
                            <img className="" src="img/logo.png" alt="Imperial"/>
                        </div>

                        <br/>
                            <div className="actions">
                                <a href="/inicio" className="btn-get-started">Iniciar Sesión</a>
                                <a href="/inicio" className="btn-get-started">Registrarse</a>
                            </div>
                    </div>
                </div>
            </section>
        </div>
)
}

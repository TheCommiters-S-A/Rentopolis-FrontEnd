import React, {useState} from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";


export const VistaPrincipal = (props) => {

    const [numeroDeInmuebles, setNumeroDeInmuebles] = useState(0);
    const handleChangeNumeroDeInmuebles = (numero) => {
        setNumeroDeInmuebles(numero);
    };

    return (
        <div className="App">
            <Header></Header>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Inmuebles disponibles:</h2>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <Filter></Filter>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">{numeroDeInmuebles} inmuebles encontrados </span>

                                </div>
                            </header>
                            <Properties amountProperties={handleChangeNumeroDeInmuebles}/>
                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}

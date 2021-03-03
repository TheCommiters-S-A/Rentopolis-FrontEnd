import React from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";


export const VistaPrincipal = (props) => {

    const [generalFilter, setGeneralFilter] = React.useState('');

    const handleChangeGeneralFilter = (event) => {
        setGeneralFilter(event.target.value);
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
                                    <span className="mr-md-auto">3 inmuebles encontrados </span>
                                    <select className="mr-2 form-control"
                                            value={generalFilter}
                                            onChange={handleChangeGeneralFilter}>
                                        <option>Últimos inmuebles</option>
                                        <option>Más populares</option>
                                        <option>Más económicos</option>
                                        <option>Más costosos</option>
                                    </select>

                                </div>
                            </header>
                            <Properties/>

                            {/*<nav className="mt-4" aria-label="Page navigation sample" >*/}
                            {/*    <ul className="pagination" >*/}
                            {/*        <li className="page-item disabled"><a className="page-link" href="#">Previo</a>*/}
                            {/*        </li>*/}
                            {/*        <li className="page-item active"><a className="page-link" href="#">1</a></li>*/}
                            {/*        <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                            {/*        <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                            {/*        <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>*/}
                            {/*    </ul>*/}
                            {/*</nav>*/}

                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}


import React, {useState} from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";


const useForceUpdate = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    return [increment, count];
}


export const VistaPrincipal = (props) => {

    const [numeroDeInmuebles, setNumeroDeInmuebles] = useState(0);

    const handleChangeNumeroDeInmuebles = (numero) => {
        setNumeroDeInmuebles(numero);
    };

    let filters_values = {
        "minPrecio": 0,
        "maxPrecio": 0,
        "name": ""
    }

    // eslint-disable-next-line
    const [filtersState, setFiltersState] = React.useState(filters_values);
    // eslint-disable-next-line
    const [forceUpdate, forceUpdateValue] = useForceUpdate();
    const [generalFilter, setGeneralFilter] = React.useState('');


    const handleChangeGeneralFilter = (event) => {
        setGeneralFilter(event.target.value);
    }



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

                            <Properties filters={filtersState}  key={forceUpdateValue}/>


                            <Properties amountProperties={handleChangeNumeroDeInmuebles}/>

                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}

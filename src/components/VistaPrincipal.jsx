import React, {useState} from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";

const useForceUpdate=()=>{
    const [count,setCount]=useState(0);
    const increment =()=>setCount(prevCount => prevCount+1);
    return [increment,count];
}

export const VistaPrincipal = (props) => {


    let filters_values = {
        "minPrecio": Number.NaN,
        "maxPrecio": Number.NaN,
        "minArea": Number.NaN,
        "maxArea": Number.NaN,
        "name": "",
        "habitaciones": Number.NaN,
        "baths": Number.NaN,
        "garajes": Number.NaN,
        "ascensor": false,
        "infantil":false,
        "vigilancia":false,
        "gimnasio":false,
        "comunal":false
    }

    const [filtersState,setFiltersState]=useState(filters_values);
    const [forceUpdate,forceUpdateValue]=useForceUpdate();
    const [numeroDeInmuebles, setNumeroDeInmuebles] = useState(0);
    const handleChangeNumeroDeInmuebles = (numero) => {
        setNumeroDeInmuebles(numero);
    };

    const handleFilter =(new_filter)=>{
        setFiltersState(new_filter);
        forceUpdate();
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
                        <Filter filters={filtersState} filter={handleFilter}></Filter>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">{numeroDeInmuebles} inmuebles encontrados </span>

                                </div>
                            </header>
                            <Properties amountProperties={handleChangeNumeroDeInmuebles} filter={filtersState} key={forceUpdateValue}/>
                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}

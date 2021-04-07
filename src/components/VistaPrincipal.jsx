import React, { useState } from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";

const  useForceUpdate=()=>{
    const [count,setCount]=useState(0);
    const increment =()=> setCount(prevCount => prevCount + 1);
    return[increment,count];
}


export const VistaPrincipal = (props) => {
    let items = [{
        "name": "Apartamento en arriendo, SUBA, Bogotá D.C",
        "price": 3402200,
        "area": 60,
        "numBathrooms": 4,
        "numBedrooms": 1,
        "picture": "assets/images/items/apto3.jpg",
        "garajes": 1,
        "ascensor":true,
        "infantil":true,
        "vigilancia":true,
        "gimnasio":false,
        "comunal":true
    }, {
        "name": "Apartamento en arriendo, ENGATIVA, Bogotá D.C",
        "price": 1231223,
        "area": 100,
        "numBathrooms": 2,
        "numBedrooms": 2,
        "picture": "assets/images/items/apto2.jpg",
        "garajes": 2,
        "ascensor":false,
        "infantil":true,
        "vigilancia":false,
        "gimnasio":true,
        "comunal":true
    }, {
        "name": "Apartamento en arriendo, CHAPINERO, Bogotá D.C",
        "price": 3421000,
        "area": 600,
        "numBathrooms": 1,
        "numBedrooms": 3,
        "picture": "assets/images/items/apto1.jpg",
        "garajes": 4,
        "ascensor":false,
        "infantil":false,
        "vigilancia":true,
        "gimnasio":true,
        "comunal":false
    }
    ];

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

    const [filtersState, setFiltersState] = React.useState(filters_values);
    const [forceUpdate,forceUpdateValue]=useForceUpdate();
    const [generalFilter, setGeneralFilter] = React.useState('');
    const [itemsState,setItems] = useState(items);

    const handleChangeGeneralFilter = (event) => {
        setGeneralFilter(event.target.value);
    };

    const handleFilters=(New_filter)=>{
        setFiltersState(New_filter)
        forceUpdate()
        console.log(New_filter);
    }

    
    


    return (
        <div className="App">
            <Header filter={handleFilters} filters={filtersState}></Header>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Inmuebles disponibles:</h2>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <Filter filter={handleFilters} filters={filtersState}></Filter>
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
                            <Properties filters={filtersState} items={itemsState} key={forceUpdateValue}/>

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


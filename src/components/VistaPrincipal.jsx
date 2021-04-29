import React, {useEffect, useState} from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";
import * as PropertyAPI from './api/PropertyAPI.js';
import axios from 'axios';
import Swal from "sweetalert2";

const apiaddrH = 'https://rentopolis.herokuapp.com'


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
        "type": "",
        "habitaciones": Number.NaN,
        "baths": Number.NaN,
        "garajes": Number.NaN,
        "ascensor": false,
        "infantil":false,
        "vigilancia":false,
        "gimnasio":false,
        "comunal":false
    }

    const [propertiesState, setProperties] = useState([]);

    const [filtersState,setFiltersState]=useState(filters_values);
    const [forceUpdate,forceUpdateValue]=useForceUpdate();
    const [numeroDeInmuebles, setNumeroDeInmuebles] = useState(0);

    const handleChangeNumeroDeInmuebles = (numero) => {
        setNumeroDeInmuebles(numero);
    };

    useEffect(() => {
        let properties=[];
    axios.get(apiaddrH + "/home/properties")
        .then(response => {
            var APIResponse = response.data;
            properties = [...properties]
            if (APIResponse.length !== properties.length) {
                properties = APIResponse
                console.log(properties,"Api call");
                setProperties(response.data)
            }

        }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    });
    },[]);

    
    console.log(propertiesState)

    const handleFilter =(new_filter)=>{
        setFiltersState(new_filter);
        forceUpdate();
    }
    const handleLoad =()=>{
        setProperties(PropertyAPI.getProperties());
    }


    
    return (
        <div className="App" >
            {handleLoad}
            <Header filters={filtersState}></Header>

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

                                    <select className="mr-2 form-control">
                                        <option>Últimos inmuebles</option>
                                        <option>Más populares</option>
                                        <option>Más económicos</option>
                                        <option>Más costosos</option>
                                    </select>

                                </div>
                            </header>
                            <Properties amountProperties={handleChangeNumeroDeInmuebles} filter={filtersState} key={forceUpdateValue} properties={propertiesState}/>
                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}

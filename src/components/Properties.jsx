import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export const Properties = (props) => {

    const items = [{
        "name": "Apartamento en arriendo, SUBA, Bogotá D.C",
        "price": 3402200,
        "area": "2",
        "numBathrooms": 4,
        "numBedrooms": 3,
        "picture": "assets/images/items/apto3.jpg"
    }, {
        "name": "Apartamento en arriendo, ENGATIVA, Bogotá D.C",
        "price": 1231223,
        "area": "2",
        "numBathrooms": 2,
        "numBedrooms": 3,
        "picture": "assets/images/items/apto3.jpg"
    },{
        "name": "Apartamento en arriendo, CHAPINERO, Bogotá D.C",
        "price": 3421000,
        "area": "3",
        "numBathrooms": 1,
        "numBedrooms": 3,
        "picture": "assets/images/items/apto3.jpg"
    }
    ];

    return (
        <div>
            <article className="card card-product-list">
                <div className="row no-gutters">
                    <aside className="col-md-8">
                        <span className="badge badge-danger"> Nuevo </span>
                        <img className="foto" src="assets/images/items/apto3.jpg"/>
                    </aside>
                    <div className="col-md-4">
                        <div className="info-main" align="center">
                            <a href="#" className="h5 title"> Apartamento en arriendo, SUBA, Bogotá D.C </a>
                            <br/>
                            <p className="text-black-50">Precio de arriendo </p>
                            <span className="price h3"> $ 1.520.000 </span>
                        </div>
                        <div className="row no-gutters">

                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Área (m²)</p>*/}
                                <p className="text-success">Área (m²)</p>
                                <span className="h5"> 57 </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Hab.</p>*/}
                                <p className="text-success">Hab.</p>
                                <span className="h5"> 2 </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Baños</p>*/}
                                <p className="text-success">Baños</p>
                                <span className="h5"> 1 </span>
                                <br/>
                            </div>
                        </div>

                        <br/>

                        <p>
                            <a href="#" className="btn btn-primary btn-block"> Contactar </a>
                        </p>
                    </div>
                </div>

            </article>

        </div>
    )
}

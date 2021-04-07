import React from 'react';


export const Property = (props) => {

    return (
        <div>
            <article className="card card-product-list">
                <div className="row no-gutters">
                    <aside className="col-md-8">
                        <img alt="" className="img-wrap" src={props.picture}/>
                    </aside>
                    <div className="col-md-3">
                        <div className="info-main" align="center">
                            <a href="/#" className="h5 title"> {props.name} </a>
                            <br/>
                            <p className="text-black-50">Precio de arriendo </p>
                            <span className="price h3"> $ {props.price} </span>
                        </div>
                        <div className="row no-gutters">

                            <div className="col-md-4" align="center">
                                <p className="text-success">Área (m²)</p>
                                <span className="h5"> {props.area} </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                <p className="text-success">Hab.</p>
                                <span className="h5"> {props.numBedrooms} </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                <p className="text-success">Baños</p>
                                <span className="h5"> {props.numBathrooms} </span>
                                <br/>
                            </div>
                        </div>

                        <br/>

                        <p>
                            <a href="/#" className="btn btn-primary btn-block"> Contactar </a>
                        </p>
                    </div>
                </div>

            </article>

        </div>

    )
}

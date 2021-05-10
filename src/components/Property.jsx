import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';

export const Property = (props) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let price = formatter.format(props.price);
    let formatPrice = price.substring(0, price.length - 3);


    return (
        <div>
            <article className="card card-product-list">
                <div className="row no-gutters">
                    <Carousel showThumbs={false} width="580px">
                        {/*<img alt="imagen" className="img-wrap" src={props.picture}/>
                        <img alt="imagen" alt="imagen" className="img-wrap" src={props.pictures}/>*/}
                        {props.pictures.map((image) => {
                            return <div><img width className="img-wrap" alt="imagen"
                                             src={"https://rentopolis.herokuapp.com/home/picture2/" + image}/></div>

                        })}
                    </Carousel>
                    <div className="col-md-4" align="center">
                        <div className="info-main" align="center">
                            <a href="/inicio" className="h5 title"> {props.name} </a>

                            {/*<a href="#" className="h5 title"> Apartamento en arriendo, SUBA, Bogotá D.C </a>*/}
                            <br/>
                            <p className="text-black-50">Precio de arriendo </p>
                            <span className="price h3"> {formatPrice}</span>
                        </div>
                        <div className="row no-gutters">

                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Área (m²)</p>*/}
                                <p className="text-success">Área (m²)</p>
                                <span className="h5"> {props.area} </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Hab.</p>*/}
                                <p className="text-success">Hab.</p>
                                <span className="h5"> {props.numBedrooms} </span>
                                <br/>
                            </div>
                            <div className="col-md-4" align="center">
                                {/*<p className="text-black-50">Baños</p>*/}
                                <p className="text-success">Baños</p>
                                <span className="h5"> {props.numBathrooms} </span>
                                <br/>
                            </div>
                        </div>

                        <br/>

                        <p>
                            <a href="/inicio" className="btn btn-primary btn-block"> Contactar </a>
                        </p>
                    </div>
                </div>

            </article>

        </div>

    )
}

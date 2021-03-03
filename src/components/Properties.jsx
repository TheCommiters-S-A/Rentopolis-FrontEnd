import React from 'react';
import {Property} from './Property';


export const Properties = (props) => {

    let items = [{
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
        "picture": "assets/images/items/apto2.jpg"
    }, {
        "name": "Apartamento en arriendo, CHAPINERO, Bogotá D.C",
        "price": 3421000,
        "area": "3",
        "numBathrooms": 1,
        "numBedrooms": 3,
        "picture": "assets/images/items/apto1.jpg"
    }
    ];

    return (
        <div>

            {items.map((item, i) => {
                return (<Property key={i}
                                  name={item.name}
                                  price={item.price}
                                  area={item.area}
                                  numBathrooms={item.numBathrooms}
                                  numBedrooms={item.numBedrooms}
                                  picture={item.picture}
                    />
                );
            })}

        </div>
    )
}

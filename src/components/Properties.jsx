import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Property} from './Property';
import Swal from "sweetalert2";


export const Properties = (props) => {



    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("https://rentopolis.herokuapp.com/home/properties")
            .then(response => {
                var APIResponse = response.data;
                let finalProperties = [...properties]
                if (APIResponse.length !== properties.length) {
                    finalProperties = APIResponse

                }
                setProperties(finalProperties)
                props.amountProperties(finalProperties.length)

                // let result = response.data;
                // setProperties(result);
            }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
    }, [properties]);

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

            {properties.map((item, i) => {
                return (<Property key={i}
                                  name={item.description}
                                  price={item.price}
                                  area={item.area}
                                  numBathrooms={item.numberOfBathRooms}
                                  numBedrooms={item.numberOfRooms}
                                  picture={item.picture}
                    />
                );
            })}

        </div>
    )
}

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

            }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
    }, [properties]);// eslint-disable-line react-hooks/exhaustive-deps

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

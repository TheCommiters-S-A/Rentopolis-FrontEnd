import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Property} from './Property';
import Swal from "sweetalert2";


export const Properties = (props) => {

    const filters = props.filter


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

    if(!isNaN(filters.minPrecio)){
        setProperties(properties.filter(item => filters.minPrecio<=item.price));
    }

    if(!isNaN(filters.maxPrecio)){
        setProperties(properties.filter(item => item.price<=filters.maxPrecio));
    }

    if(filters.name!==""){
        setProperties(properties.filter(item => item.name.includes(filters.name)));
    }

    if(!isNaN(filters.minArea)){
        setProperties(properties.filter(item => filters.minArea<=item.area));
    }

    if(!isNaN(filters.maxArea)){
        setProperties(properties.filter(item => item.area<=filters.maxArea));
    }

    if(!isNaN(filters.habitaciones)){
        setProperties(properties.filter(item => item.numberOfRooms===filters.habitaciones));
    }

    if(!isNaN(filters.baths)){
        setProperties(properties.filter(item => item.numBathrooms===filters.baths));
    }

    if(!isNaN(filters.garajes)){
        setProperties(properties.filter(item => item.garajes===filters.garajes));
    }
    
    if(filters.ascensor){
        setProperties(properties.filter(item => item.elevator===filters.ascensor));
    }

    if(filters.infantil){
        setProperties(properties.filter(item => item.infanti===filters.infantil));
    }

    if(filters.gimnasio){
        setProperties(properties.filter(item => item.gym===filters.gimnasio));
    }

    if(filters.vigilancia){
        setProperties(properties.filter(item => item.surveillance===filters.vigilancia));
    }

    if(filters.comunal){
        setProperties(properties.filter(item => item.communityRoom===filters.comunal));
    }


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
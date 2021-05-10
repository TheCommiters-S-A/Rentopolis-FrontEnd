import React, {useState, useEffect} from 'react';
import {Property} from './Property';
import axios from 'axios';


export const Properties = (props) => {

    const filters = props.filter


    let [properties, setProperties] = useState([]);

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

        });
    }, [properties]);// eslint-disable-line react-hooks/exhaustive-deps


    if(!isNaN(filters.minPrecio)){
        properties = properties.filter(item => filters.minPrecio<=item.price);
    }

    if(!isNaN(filters.maxPrecio)){
        properties = properties.filter(item => item.price<=filters.maxPrecio);
    }

    if(filters.name!==""){
        properties = properties.filter(item => item.description.includes(filters.name));
    }

    if(filters.type!==""){
        properties = properties.filter(item => item.type.includes(filters.type));
    }

    if(!isNaN(filters.minArea)){
        properties = properties.filter(item => filters.minArea<=item.area);
    }

    if(!isNaN(filters.maxArea)){
        properties = properties.filter(item => item.area<=filters.maxArea);
    }

    if(!isNaN(filters.habitaciones)){
        properties = properties.filter(item => item.numberOfRooms===filters.habitaciones);
    }

    if(!isNaN(filters.baths)){
        properties = properties.filter(item => item.numBathrooms===filters.baths);
    }

    if(!isNaN(filters.garajes)){
        properties = properties.filter(item => item.garajes===filters.garajes);
    }
    
    if(filters.ascensor){
        properties = properties.filter(item => item.elevator===filters.ascensor);
    }

    if(filters.infantil){
        properties = properties.filter(item => item.infanti===filters.infantil);
    }

    if(filters.gimnasio){
        properties = properties.filter(item => item.gym===filters.gimnasio);
    }

    if(filters.vigilancia){
        properties = properties.filter(item => item.surveillance===filters.vigilancia);
    }

    if(filters.comunal){
        properties = properties.filter(item => item.communityRoom===filters.comunal);
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
                                  pictures={item.images}
                    />
                );
            })}

        </div>
    )
        }

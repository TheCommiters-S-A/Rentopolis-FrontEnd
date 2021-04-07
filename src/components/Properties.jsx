import React from 'react';
import {Property} from './Property';


export const Properties = (props) => {

    const filters = props.filters;

    let items = props.items;


    if(!isNaN(filters.minPrecio)){
        items = items.filter(item => filters.minPrecio<=item.price);
    }

    if(!isNaN(filters.maxPrecio)){
        items = items.filter(item => item.price<=filters.maxPrecio);
    }

    if(filters.name!=""){
        items = items.filter(item => item.name.includes(filters.name));
    }

    if(!isNaN(filters.minArea)){
        items = items.filter(item => filters.minArea<=item.area);
    }

    if(!isNaN(filters.maxArea)){
        items = items.filter(item => item.area<=filters.maxArea);
    }

    if(!isNaN(filters.habitaciones)){
        items = items.filter(item => item.numBedrooms=filters.habitaciones);
    }

    if(!isNaN(filters.baths)){
        items = items.filter(item => item.numBathrooms=filters.baths);
    }

    if(!isNaN(filters.garajes)){
        items = items.filter(item => item.garajes=filters.garajes);
    }
    
    if(filters.ascensor){
        items = items.filter(item => item.ascensor=filters.ascensor);
    }

    if(filters.infantil){
        items = items.filter(item => item.infanti>=filters.infantil);
    }

    if(filters.gimnasio){
        items = items.filter(item => item.gimnasio=filters.gimnasio);
    }

    if(filters.vigilancia){
        items = items.filter(item => item.vigilanci>=filters.vigilancia);
    }

    if(filters.comunal){
        items = items.filter(item => item.comunal=filters.comunal);
    }

    console.log(filters,"---------------------")

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
    );
}

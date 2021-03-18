import React from 'react';
import {Property} from './Property';


export const Properties = (props) => {

    const filters = props.filters;

    let items = props.items;


    if(!isNaN(filters.minPrecio)){
        items = items.filter(item => filters.minPrecio<=item.price);
    }

    if(!isNaN(filters.maxPrecio)){
        items = items.filter(item => filters.maxPrecio>=item.price);
    }

    if(filters.name!=""){
        items = items.filter(item => item.name.includes(filters.name));
    }

    console.log(filters);

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

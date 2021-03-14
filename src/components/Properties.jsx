import React from 'react';
import {Property} from './Property';


export const Properties = (props) => {

    const filters = props.filters;

    let items = props.items;


    if(filters.minPrecio!=0){
        console.log(filters,"---------------------")
        items = items.filter(item => filters.minPrecio<=item.price);
    };

    if(filters.maxPrecio!=0){
        console.log(filters,"---------------------")
        items = items.filter(item => filters.maxPrecio<=item.price);
    };

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

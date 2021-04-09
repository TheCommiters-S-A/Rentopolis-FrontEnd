import React from 'react';
import {Property} from './Property';


export const Properties = (props) => {

    let items = props.items;

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

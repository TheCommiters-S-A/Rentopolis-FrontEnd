import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import House from '../../views/Login/casa.svg';
import Icon from '../../views/Login/icon.svg';
import 'fontsource-roboto';



const useStyle = makeStyles({
    houseContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${House}) no-repeat center`,
        backgroundSize: "contain",
        height: "400px",
        position: "relative",
    },

    icon:{
        background: `url(${Icon}) no-repeat center`,
        backgroundSize: "contain",
        position: "relative",
        height: "80px",
        width: "80px",

    }
});

export const HousePaper = ( {component:Component} ) =>{

    const classes = useStyle();

    return(
        <div>
            <div id="preloader"></div>
            <section id="hero">
                <div className="hero-container">
                    <div className={classes.houseContainer}>
                        <Grid container 
                              direction="column"
                              justify="center"
                              alignItems="center"
                              spacing={0}
                        >
                            <Grid item >
                                <div className={classes.icon}>
                                </div>
                            </Grid>
                            <Grid item>
                                <Component />
                            </Grid>
                        </Grid>
                     </div>  
                </div>
            </section>
        </div>
    );


};
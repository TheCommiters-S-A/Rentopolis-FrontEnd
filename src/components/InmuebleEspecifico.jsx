import React from 'react';
import {HeaderSimple} from "./HeaderSimple";

import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';


const images = [
    {url: "assets/images/items/apto2.jpg"},
    {url: "assets/images/items/apto1.jpg"},
    {url: "assets/images/items/finca.jpg"},
];


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 350,
    },
    formControl2: {
        margin: theme.spacing(1),
        minWidth: 600,
    },
    formControl3: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        minWidth: 200,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 1,
        marginTop: 30
    },
}));

export const InmuebleEspecifico = (props) => {

    const classes = useStyles();

    return (
        <div className="App">
            <HeaderSimple></HeaderSimple>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Apartamento en Chicó</h2>
                </div>
            </section>

            <section className="section-content padding-y2">
                <div className="container">
                    <div className="row">
                        <main className="col-md-12-new">
                            <div className="container wow fadeInUp">
                                <div className="col-lg-10 col-md-8">
                                    <div className="form">
                                        <img alt="inmueble" className="img-wrapp" src={images[2].url}/>
                                        {/*<SimpleImageSlider*/}
                                        {/*    width={896}*/}
                                        {/*    height={504}*/}
                                        {/*    images={images}*/}
                                        {/*    showBullets={true}*/}
                                        {/*    showNavs={true}*/}
                                        {/*    slideDuration={0.5}*/}
                                        {/*    navStyle={2}*/}
                                        {/*    useGPURender={true}*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                            </div>
                        </main>
                        <div>
                            <h5 align="center">Arriendo:</h5>
                            <Typography align="center" variant="h5" component="h2">
                                $ 800.000
                            </Typography>

                            <br/>
                            <br/>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" align="center" color="textSecondary">
                                        Área construida
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        12 m²
                                    </Typography>


                                    <Typography variant="h6" align="center" className={classes.pos}
                                                color="textSecondary">
                                        Habitaciones
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        4
                                    </Typography>

                                    <Typography variant="h6" align="center" className={classes.pos}
                                                color="textSecondary">
                                        Baños
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        3
                                    </Typography>

                                    <Typography variant="h6" align="center" className={classes.pos}
                                                color="textSecondary">
                                        Estrato
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        4
                                    </Typography>


                                </CardContent>

                            </Card>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>

            <br/>
            <section className="section-pagetop bg">
                <div className="container">
                    <h3 className="title-page">Características del inmueble:</h3>
                    <br/>

                    <h6>Tipo de inmueble:</h6>
                    <p>Apartaestudio</p>
                    <br/>

                    <CheckIcon/>
                    <h6>Ascensor</h6>
                    <br/>

                    <CheckIcon/>
                    <h6>Tiene vigilancia</h6>
                    <br/>

                    <ClearIcon/>
                    <h6>Gimnasio</h6>
                    <br/>


                    <ClearIcon/>
                    <h6>Amoblado</h6>
                    <br/>

                    <CheckIcon/>
                    <h6>Salón comunal</h6>
                    <br/>

                </div>
            </section>


        </div>
    )
}

import React from 'react';
import {HeaderSimple} from "./HeaderSimple";
import SimpleImageSlider from "react-simple-image-slider";
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                    <h2 className="title-page">Detalle del inmueble:</h2>
                </div>
            </section>

            <section className="section-content padding-y2">
                <div className="container">
                    <div className="row">
                        <main className="col-md-12-new">
                            <div class="container wow fadeInUp">
                                <div class="col-lg-10 col-md-8">
                                    <div class="form">
                                        <SimpleImageSlider
                                            width={896}
                                            height={504}
                                            images={images}
                                            showBullets={true}
                                            showNavs={true}
                                            slideDuration={0.5}
                                            navStyle={2}
                                            useGPURender={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                        <div>
                            <br/>
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


                                </CardContent>

                            </Card>
                            <br/>
                            <p>
                                <a href="#" className="btn btn-primary btn-block"> Contactar al anunciante </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <br/>
            <section className="section-pagetop bg">
                <div className="container">
                    <h3 className="title-page">Datos principales del inmueble:</h3>
                </div>
            </section>

            <br/>
            <section className="section-pagetop bg">
                <div className="container">
                    <h3 className="title-page">Características del inmueble:</h3>
                </div>
            </section>

        </div>
    )
}

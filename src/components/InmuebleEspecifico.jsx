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
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export const InmuebleEspecifico = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
                                    <br/>
                                    <Card className={classes.root} variant="outlined">
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                be{bull}nev{bull}o{bull}lent
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                                <br/>
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </div>


                            </div>


                        </main>
                    </div>
                </div>
            </section>

        </div>
    )
}

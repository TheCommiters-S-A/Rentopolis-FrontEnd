import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import {HeaderSimple} from "./HeaderSimple";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 350,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const PublicarInmueble = (props) => {

    const classes = useStyles();

    const [tipoDeInmueble, setTipoDeInmueble] = React.useState('');
    const [precio, setPrecio] = React.useState('');
    const [estrato, setEstrato] = React.useState('');
    const [area, setArea] = React.useState('');
    const [numHabitaciones, setNumHabitaciones] = React.useState('');
    const [numBanos, setNumBanos] = React.useState('');
    const [ubicacion, setUbicacion] = React.useState('');
    const [barrio, setBarrio] = React.useState('');
    const [direccion, setDireccion] = React.useState('');

    const handleChangeTipoDeInmueble = (event) => {
        setTipoDeInmueble(event.target.value);
    };

    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
    };

    const handleChangeEstrato = (event) => {
        setEstrato(event.target.value);
    };

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };

    const handleChangeNumHabitaciones = (event) => {
        setNumHabitaciones(event.target.value);
    };

    const handleChangeNumBanos = (event) => {
        setNumBanos(event.target.value);
    };

    const handleChangeUbicacion = (event) => {
        setUbicacion(event.target.value);
    };

    const handleChangeBarrio = (event) => {
        setBarrio(event.target.value);
    };

    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value);
    };

    return (
        <div className="App">
            <HeaderSimple></HeaderSimple>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Publica tu inmueble:</h2>
                </div>
            </section>

            <section className="section-content padding-y2">
                <div className="container">
                    <div className="row">
                        <main className="col-md-12-new">
                            <div class="container wow fadeInUp">
                                <div class="col-lg-10 col-md-8">
                                    <div class="form">
                                        <form>
                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Tipo de
                                                    inmueble:</Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Select fullWidth required
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={tipoDeInmueble}
                                                            onChange={handleChangeTipoDeInmueble}
                                                    >
                                                        <MenuItem value={"Apartamento"}>Apartamento</MenuItem>
                                                        <MenuItem value={"Apartaestudio"}>Apartaestudio</MenuItem>
                                                        <MenuItem value={"Casa"}>Casa</MenuItem>
                                                        <MenuItem value={"Oficina"}>Oficina</MenuItem>
                                                        <MenuItem value={"Local"}>Local</MenuItem>
                                                        <MenuItem value={"Lote"}>Lote</MenuItem>
                                                        <MenuItem value={"Bodega"}>Bodega</MenuItem>
                                                        <MenuItem value={"Finca"}>Finca</MenuItem>
                                                        <MenuItem value={"Consultorio"}>Consultorio</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Valor de arriendo
                                                    (COP):</Typography>
                                                <FormControl className={classes.formControl}>
                                                    {/*<InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>*/}
                                                    <Input
                                                        id="standard-adornment-amount"
                                                        required
                                                        type="number"
                                                        value={precio}
                                                        onChange={handleChangePrecio}
                                                        startAdornment={<InputAdornment
                                                            position="start">$</InputAdornment>}
                                                    />
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Ubicado
                                                    en: </Typography>
                                                {/*<TextField style = {{width: 1000}} id="outlined-basic" label="Outlined" variant="outlined" />*/}
                                                <TextField required className={classes.formControl} id="ubicacion"
                                                           label="Ubicación"
                                                           value={ubicacion} onChange={handleChangeUbicacion}
                                                           variant="outlined"/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> En la
                                                    dirección: </Typography>
                                                <TextField required className={classes.formControl} id="direccion"
                                                           placeholder="Ej: Cra 34 # 12-23"
                                                           value={direccion} onChange={handleChangeDireccion}
                                                           variant="outlined"/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Barrio: </Typography>
                                                <TextField required className={classes.formControl} id="barrio"
                                                           placeholder="Ej: Chicó"
                                                           value={barrio} onChange={handleChangeBarrio}
                                                           variant="outlined"/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Estrato: </Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Select
                                                        labelId="estrato"
                                                        id="estrato"
                                                        value={estrato}
                                                        onChange={handleChangeEstrato}
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Área construida
                                                    (m²):</Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Input
                                                        id="area"
                                                        required
                                                        type="number"
                                                        value={area}
                                                        onChange={handleChangeArea}
                                                        endAdornment={<InputAdornment
                                                            position="start">m²</InputAdornment>}
                                                    />
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Habitaciones: </Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Select
                                                        labelId="numHabitaciones"
                                                        id="numHabitaciones"
                                                        value={numHabitaciones}
                                                        onChange={handleChangeNumHabitaciones}
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Baños: </Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Select
                                                        labelId="numBanos"
                                                        id="numBanos"
                                                        value={numBanos}
                                                        onChange={handleChangeNumBanos}
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Cuenta
                                                    con: </Typography>
                                                <div className="card-body">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Ascensor</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Zona infantil</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Vigilancia</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Gimnasio</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Salón comunal</div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <Button style = {{width: 300, height: 50}} type="submit" variant="contained" color="primary">
                                                    <Typography align="left" variant="h6" component="h6"> Publicar inmueble</Typography>
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>


                        </main>
                    </div>
                </div>
            </section>

        </div>
    )
}


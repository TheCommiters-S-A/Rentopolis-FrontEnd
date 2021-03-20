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
import axios from "axios";
import Swal from 'sweetalert2';

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
}));

export const PublicarInmueble = (props) => {

    const classes = useStyles();

    const [tipoDeInmueble, setTipoDeInmueble] = React.useState('');
    const [imagen, setImagen] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [precio, setPrecio] = React.useState('');
    const [estrato, setEstrato] = React.useState('');
    const [area, setArea] = React.useState('');
    const [numHabitaciones, setNumHabitaciones] = React.useState('');
    const [numBanos, setNumBanos] = React.useState('');
    const [ubicacion, setUbicacion] = React.useState('');
    const [barrio, setBarrio] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [tieneAscensor, setTieneAscensor] = React.useState(false);
    const [tieneMuebles, setTieneMuebles] = React.useState(false);
    const [tieneVigilancia, setTieneVigilancia] = React.useState(false);
    const [tieneGym, setTieneGym] = React.useState(false);
    const [tieneSalonComunal, setTieneSalonComunal] = React.useState(false);

    const handleChangeTipoDeInmueble = (event) => {
        setTipoDeInmueble(event.target.value);
    };

    const handleChangeDescripcion = (event) => {
        setDescripcion(event.target.value);
    };

    const handleChangeImagen = (event) => {
        setImagen(event.target.value);
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

    const handleChangeTieneAscensor = (event) => {
        setTieneAscensor(event.target.checked);
    };

    const handleChangeTieneMuebles = (event) => {
        setTieneMuebles(event.target.checked);
    };

    const handleChangeTieneVigilancia = (event) => {
        setTieneVigilancia(event.target.checked);
    };

    const handleChangeTieneGym = (event) => {
        setTieneGym(event.target.checked);
    };

    const handleChangeTieneSalonComunal = (event) => {
        setTieneSalonComunal(event.target.checked);
    };


    let property = {
        id: 1213,
        area: area,
        price: precio,
        location: {
            latitude: 0,
            longitude: 0
        },
        typeProperty: tipoDeInmueble,
        numberOfRooms: numHabitaciones,
        communityRoom: tieneSalonComunal,
        description: descripcion,
        numberOfBathRooms: numBanos,
        elevator: tieneAscensor,
        surveillance: tieneVigilancia,
        gym: tieneGym,
        furniture: tieneMuebles,
        image: imagen,
        address: direccion,
        neighborhood: barrio,
        stratum: estrato
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(property)
        axios.post("http://localhost:8080/home/property", property)
            .then(response => {
                return response.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Súper!',
                    'Inmueble publicado',
                    'success'
                )
            }).catch(error => {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error publicando el inmueble'
            })
        });
    }

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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Tipo de
                                                    inmueble:</Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Select fullWidth required
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={tipoDeInmueble}
                                                            onChange={handleChangeTipoDeInmueble}
                                                            required
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
                                                <Typography align="left" variant="h5" component="h5"> Descripción corta
                                                    de tu inmueble: </Typography>
                                                <TextField required className={classes.formControl2}
                                                           label="Escribe algo característico de tu propiedad"
                                                           value={descripcion} onChange={handleChangeDescripcion}
                                                           variant="outlined"
                                                           required
                                                />
                                            </div>


                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Fotografía de tu
                                                    inmueble: </Typography>
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                >
                                                    <input  required value={imagen} onChange={handleChangeImagen} type="file"/>
                                                </Button>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> Valor de arriendo
                                                    (COP):</Typography>
                                                <FormControl className={classes.formControl}>
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

                                                <TextField required className={classes.formControl} id="ubicacion"
                                                           label="Ciudad o municipio" required
                                                           value={ubicacion} onChange={handleChangeUbicacion}
                                                           variant="outlined"/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5" component="h5"> En la
                                                    dirección: </Typography>
                                                <TextField required className={classes.formControl} id="direccion"
                                                           placeholder="Ej: Cra 34 # 12-23"
                                                           value={direccion} onChange={handleChangeDireccion}
                                                           variant="outlined" required/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Barrio: </Typography>
                                                <TextField required className={classes.formControl} id="barrio"
                                                           placeholder="Ej: Chicó"
                                                           value={barrio} onChange={handleChangeBarrio}
                                                           variant="outlined" required/>
                                            </div>

                                            <div className="form-group">
                                                <Typography align="left" variant="h5"
                                                            component="h5"> Estrato: </Typography>
                                                <FormControl className={classes.formControl3}>
                                                    <Select
                                                        labelId="estrato"
                                                        id="estrato"
                                                        value={estrato} required
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
                                                <FormControl className={classes.formControl3}>
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
                                                <FormControl className={classes.formControl3}>
                                                    <Select
                                                        labelId="numHabitaciones"
                                                        id="numHabitaciones"
                                                        value={numHabitaciones}
                                                        onChange={handleChangeNumHabitaciones}
                                                        required
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
                                                <FormControl className={classes.formControl3}>
                                                    <Select
                                                        labelId="numBanos"
                                                        id="numBanos"
                                                        value={numBanos}
                                                        onChange={handleChangeNumBanos}
                                                        required
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
                                                        <input checked={tieneAscensor}
                                                               onChange={handleChangeTieneAscensor} type="checkbox"
                                                               className="custom-control-input"/>
                                                        <div className="custom-control-label">Ascensor</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input checked={tieneMuebles}
                                                               onChange={handleChangeTieneMuebles} type="checkbox"
                                                               className="custom-control-input"/>
                                                        <div className="custom-control-label">Muebles</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input checked={tieneVigilancia}
                                                               onChange={handleChangeTieneVigilancia} type="checkbox"
                                                               className="custom-control-input"/>
                                                        <div className="custom-control-label">Vigilancia</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input checked={tieneGym} onChange={handleChangeTieneGym}
                                                               type="checkbox" className="custom-control-input"/>
                                                        <div className="custom-control-label">Gimnasio</div>
                                                    </label>
                                                    <label className="custom-control custom-checkbox">
                                                        <input checked={tieneSalonComunal}
                                                               onChange={handleChangeTieneSalonComunal} type="checkbox"
                                                               className="custom-control-input"/>
                                                        <div className="custom-control-label">Salón comunal</div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <Button style={{width: 300, height: 50}} type="submit"
                                                        variant="contained" color="primary">
                                                    <Typography align="left" variant="h6" component="h6"> Publicar
                                                        inmueble</Typography>
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


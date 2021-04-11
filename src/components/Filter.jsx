import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const Filter = (props) => {

    let filters = props.filters;

    const classes = useStyles();

    const [filterState, setFilterState] = React.useState(filters);


    const handletypeChange=(e)=>{
        e.preventDefault();
        if(filterState.type===""){
            filterState.type=e.target.value;
        }else{
            filterState.type="";
        }
        setFilterState(filterState);
        props.filter(filterState);
    }


    const handleChangeAreaMinima = (e) => {
        e.preventDefault();
        filterState.minArea = parseInt(e.target.value);
    };
    const handleChangeAreaMaxima = (e) => {
        e.preventDefault();
        filterState.maxArea = parseInt(e.target.value);
    };

    const handleChangeMinPrecio =(e)=>{
        filters.minPrecio = parseInt(e.target.value);
    };

    const handleChangeMaxPrecio=(e)=>{
        filters.maxPrecio = parseInt(e.target.value);
    }
    
    const handleChangeHabitaciones=(e)=>{
        e.preventDefault()
        if(isNaN(filterState.habitaciones)){
            filterState.habitaciones = parseInt(e.target.value);
        }
        else{
            filterState.habitaciones = Number.NaN;
        }
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangebaths=(e)=>{
        e.preventDefault()
        if(isNaN(filterState.baths)){
            filterState.baths = parseInt(e.target.value);
        }
        else{
            filterState.baths = Number.NaN;
        }
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeGarajes=(e)=>{
        e.preventDefault()
        if(isNaN(filterState.garajes)){
            filterState.garajes = parseInt(e.target.value);
        }
        else{
            filterState.garajes = Number.NaN;
        }
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeAsensor=(e)=>{
        e.preventDefault();
        filterState.ascensor = e.target.checked;
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeVigilancia=(e)=>{
        e.preventDefault();
        filterState.vigilancia=e.target.checked;
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeInfantil=(e)=>{
        e.preventDefault();
        filterState.infantil=e.target.checked;
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeComunal=(e)=>{
        e.preventDefault();
        filterState.comunal=e.target.checked;
        setFilterState(filterState);
        props.filter(filterState);
    }

    const handleChangeGimnasio=(e)=>{
        e.preventDefault();
        filterState.gimnasio=e.target.checked;
        setFilterState(filterState);
        props.filter(filterState);
    }


    const handleFilter=()=>{
        console.log(filters);
        setFilterState(filters);
    }

    return (

        <aside className="col-md-3">
            <div className="card">


                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_1"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Ciudad, sector o barrio</h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_1">
                        <div className="card-body">
                            <form className="pb-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Buscar"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-light" type="button"><i
                                            className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_2"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Tipo de inmueble </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_2">
                        <div className="card-body">
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Apartamento"/>
                                <div className="custom-control-label">Apartamentos
                                    <b className="badge badge-pill badge-light float-right">120</b>
                                </div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Apartaestudio"/>
                                <div className="custom-control-label" >Apartaestudios
                                    <b className="badge badge-pill badge-light float-right">15</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Casa"/>
                                <div className="custom-control-label">Casas
                                    <b className="badge badge-pill badge-light float-right">35</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Oficina"/>
                                <div className="custom-control-label">Oficinas
                                    <b className="badge badge-pill badge-light float-right">89</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Local"/>
                                <div className="custom-control-label" >Locales
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Bodega"/>
                                <div className="custom-control-label">Bodegas
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Lote"/>
                                <div className="custom-control-label" >Lotes
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Finca"/>
                                <div className="custom-control-label">Fincas
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Edificio"/>
                                <div className="custom-control-label">Edificio de oficinas
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={handletypeChange} value="Consultorio"/>
                                <div className="custom-control-label" >Consultorios
                                    <b className="badge badge-pill badge-light float-right">30</b></div>
                            </label>
                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_3"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Rango de precios </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_3">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Precio desde (COP):</label>
                                    <input className="form-control" placeholder="$0" type="number" onChange={handleChangeMinPrecio}/>
                                </div>
                                <div className="form-group text-right col-md-6">
                                    <label>Precio hasta (COP):</label>
                                    <input className="form-control" placeholder="$1,0000" type="number" onChange={handleChangeMaxPrecio}/>
                                </div>
                            </div>
                            <button className="btn btn-block btn-outline-primary-light" onClick={handleFilter}>Filtrar precios</button>
                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_7"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Área (m2)</h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_7">
                        <div className="card-body">


                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Desde:</label>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Min</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={handleChangeAreaMinima}
                                        >
                                            <MenuItem value={60}>60 m2</MenuItem>
                                            <MenuItem value={100}>100 m2</MenuItem>
                                            <MenuItem value={200}>200 m2</MenuItem>
                                            <MenuItem value={300}>300 m2</MenuItem>
                                            <MenuItem value={400}>400 m2</MenuItem>
                                            <MenuItem value={500}>500 m2</MenuItem>
                                            <MenuItem value={1200}>1200 m2 +</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Hasta:</label>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Max</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={handleChangeAreaMaxima}
                                        >
                                            <MenuItem value={60}>60 m2</MenuItem>
                                            <MenuItem value={100}>100 m2</MenuItem>
                                            <MenuItem value={200}>200 m2</MenuItem>
                                            <MenuItem value={300}>300 m2</MenuItem>
                                            <MenuItem value={400}>400 m2</MenuItem>
                                            <MenuItem value={500}>500 m2</MenuItem>
                                            <MenuItem value={1200}>1200 m2 +</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <button className="btn btn-block btn-outline-primary-light" onClick={handleFilter}>Filtrar por área</button>
                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_4"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Habitaciones </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_4">
                        <div className="card-body" align="center">
                            <label className="checkbox-btn">
                                <input type="checkbox" value="1" onChange={handleChangeHabitaciones}/>
                                <span className="btn btn-light"> 1 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="2" onChange={handleChangeHabitaciones}/>
                                <span className="btn btn-light"> 2 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="3" onChange={handleChangeHabitaciones}/>
                                <span className="btn btn-light"> 3 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="4" onChange={handleChangeHabitaciones}/>
                                <span className="btn btn-light"> 4 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="5" onChange={handleChangeHabitaciones}/>
                                <span className="btn btn-light"> 5+ </span>
                            </label>
                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_5"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Baños </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_5">
                        <div className="card-body" align="center">
                            <label className="checkbox-btn">
                                <input type="checkbox"  value="1" onChange={handleChangebaths}/>
                                <span className="btn btn-light"> 1 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="2" onChange={handleChangebaths}/>
                                <span className="btn btn-light"> 2 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox " value="3" onChange={handleChangebaths}/>
                                <span className="btn btn-light"> 3 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="4" onChange={handleChangebaths}/>
                                <span className="btn btn-light"> 4 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox" value="5" onChange={handleChangebaths}/>
                                <span className="btn btn-light"> 5+ </span>
                            </label>
                        </div>
                    </div>
                </article>

                <article className="filter-group">
                    <header className="card-header">
                        <a href="/#" data-toggle="collapse" data-target="#collapse_6"
                           aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Garajes </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_6">
                        <div className="card-body" align="center">
                            <label className="checkbox-btn">
                                <input type="checkbox" onChange={handleChangeGarajes}/>
                                <span className="btn btn-light"> 1 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox"  onChange={handleChangeGarajes}/>
                                <span className="btn btn-light"> 2 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox"  onChange={handleChangeGarajes}/>
                                <span className="btn btn-light"> 3 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox"  onChange={handleChangeGarajes}/>
                                <span className="btn btn-light"> 4 </span>
                            </label>
                            <label className="checkbox-btn">
                                <input type="checkbox"  onChange={handleChangeGarajes}/>
                                <span className="btn btn-light"> 5+ </span>
                            </label>
                        </div>
                    </div>
                </article>

            </div>

            <article className="filter-group">
                <header className="card-header">
                    <a href="/#" data-toggle="collapse" data-target="#collapse_8"
                       aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Lo quiero con: </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_8">
                    <div className="card-body">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" onChange={handleChangeAsensor}/>
                            <div className="custom-control-label">Ascensor</div>
                        </label>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" onChange={handleChangeInfantil} />
                            <div className="custom-control-label">Zona infantil</div>
                        </label>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" onChange={handleChangeVigilancia}/>
                            <div className="custom-control-label">Vigilancia</div>
                        </label>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" onChange={handleChangeGimnasio}/>
                            <div className="custom-control-label">Gimnasio</div>
                        </label>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"onChange={handleChangeComunal}/>
                            <div className="custom-control-label">Salón comunal</div>
                        </label>

                    </div>
                </div>
            </article>

        </aside>
    )
}

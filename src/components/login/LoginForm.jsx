import {Button, Grid, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton} from '@material-ui/core';
import React, {useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import 'fontsource-roboto';
import Link from "@material-ui/core/Link";
import { useAuth } from "../../hooks/use-auth";
import Swal from "sweetalert2";

const useStyle = makeStyles({
    textFields: {
        color: '#fff',
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
    overrides: {
        MuiStandardInput: {
            root: {
                position: "relative",
                "& $notchedOutline": {
                    borderColor: "#ffff"
                },
                "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                    borderColor: "#ffff",

                    "@media (hover: none)": {
                        borderColor: "#ffff"
                    }
                },
                "&$focused $notchedOutline": {
                    borderColor: "#ffff",
                    borderWidth: 1
                }
            }
        },
        MuiFormLabel: {
            root: {
                color: "#ffff"
            }
        }
    }
});

export const LoginForm = props => {

    const auth =  useAuth();

    const classes = useStyle();

    const [values, setValues] = useState({
        user: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        await auth.signin(values.user, values.password)
            .then( user =>
                window.location.href = "/inicio"
            ).catch(error =>  {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
    }

    return (
        <form autoComplete="off" onSubmit={ handleSubmit }>
            <ThemeProvider theme={theme}>
                <Grid container direction="column" justify="space-around" alignItems="center" spacing={4}>
                    <Grid item xs={9}>
                        <TextField
                            id="user"
                            label="Correo"
                            size="medium"
                            onChange={handleChange('user')}
                            InputProps={{
                                className: classes.textFields
                            }}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <FormControl className={classes.textField}>
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color="primary" type="submit"> Iniciar Sesión</Button>
                    </Grid>
                    <Link href="/registro" >
                        ¿Aún no tienes una cuenta? Regístrate
                    </Link>
                </Grid>
            </ThemeProvider>
        </form>
    );
};

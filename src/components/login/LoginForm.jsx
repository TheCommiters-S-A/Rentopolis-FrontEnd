import { Button, Grid, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import React, {useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import 'fontsource-roboto';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const useStyle = makeStyles({
    textFields:{
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

export const LoginForm = props =>{

    const classes = useStyle();

    const [values, setValues] = useState({
        user: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const firebase = useFirebaseApp();

    const signin = async (e) => {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword( values.user, values.password)
                             .then( user =>{
                                alert('Sesión Iniciada');
                             })
                             .catch( error =>{
                                 console.log(error, values.user, values.password)
                             });

    }

    return(
            <form autoComplete="off" onSubmit={ signin }>
                <ThemeProvider theme={theme}>
                        <Grid container direction="column" justify="space-around" alignItems="center" spacing={4}>
                            <Grid item xs={9}>
                                <TextField 
                                    id="user" 
                                    label="Correo" 
                                    size="medium"
                                    onChange={ handleChange('user') }
                                    InputProps={{
                                        className:classes.textFields
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
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button color="primary" type="submit"> Iniciar Sesión</Button>
                            </Grid>
                        </Grid>
                </ThemeProvider>
            </form>
    );
};
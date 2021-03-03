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

    textField: {
        width: '40ch',
      },
    textField2: {
    width: '17ch',
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

export const RegisterForm = props =>{

    const classes = useStyle();

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
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

    const signup = async (e) =>{
        e.preventDefault()
        await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                             .then((response)=>{
                                 alert(`Ya eres parte de Rentópolis ${values.name} ${values.lastName} !`);
                                 console.log(response);
                             })
                             .catch( error =>{
                                 console.log(error);
                             });
    }

    return(
            <form autoComplete="off" onSubmit={ signup }>
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center" justify="center" spacing={2}>
                        <Grid item xs={10} sm={2}>
                            <FormControl className={classes.textField2}>
                                <InputLabel htmlFor="name">Nombre</InputLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={2}>
                            <FormControl className={classes.textField2}>
                                <InputLabel htmlFor="lastName">Apellido</InputLabel>
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10}>
                            <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="email">Correo</InputLabel>
                                    <Input
                                        id="email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10}>
                            <FormControl className={ classes.textField}>
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
                        <Grid item xs={12}>
                            <Button color="primary" type="submit"> Registrarse </Button>
                        </Grid>
                    </Grid>    
                </ThemeProvider>
            </form>
    );


};
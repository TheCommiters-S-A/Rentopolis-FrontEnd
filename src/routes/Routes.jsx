import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {VistaPrincipal} from '../components/VistaPrincipal';
import {PublicarInmueble} from '../components/PublicarInmueble';
import {Bienvenida} from '../components/Bienvenida';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" type="public" component={Bienvenida}></Route>
                    <Route exact path="/inicio" type="private" component={VistaPrincipal}></Route>
                    <Route exact path="/login" component={ Login }/>
                    <Route exact path="/registro" component={ Register }/>
                    <Route exact path="/publicar" component={ PublicarInmueble }/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;

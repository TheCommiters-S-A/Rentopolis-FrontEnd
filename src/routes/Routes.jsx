import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GuardRoute from './GuardRoute';
import {VistaPrincipal} from '../components/VistaPrincipal';
import {Bienvenida} from '../components/Bienvenida';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <GuardRoute path="/inicio" type="private" component={VistaPrincipal}></GuardRoute>
                    <Route path="/" type="public" component={Bienvenida}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;

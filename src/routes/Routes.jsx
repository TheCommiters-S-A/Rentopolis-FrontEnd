import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GuardRoute from './GuardRoute';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <GuardRoute path="/inicio" type="private" component={VistaPrincipal}></GuardRoute>
                <Route path="/" type="public" component={Bienvenida}></Route>
            </Switch>
        );
    }
}

export default Routes;

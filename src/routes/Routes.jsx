import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Bienvenida} from '../components/Bienvenida';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import {FeedPage} from "../pages/FeedPage/FeedPage";


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={Bienvenida}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registro" component={Register}/>
                <Route exact path="/inicio" render={FeedPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

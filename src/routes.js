//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom'

//Components
import App from './components/App'
import Home from './components/pages/Home'
import Reservas from './components/pages/Reservas'


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path = '/reservas' component={Reservas} />
            <Route component={Home} />
        </Switch>
    </App>
export default AppRoutes;
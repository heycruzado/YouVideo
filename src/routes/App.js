/**
 * Tendra las rutas con las que trabajaremos
 * BrowserRouter - encapsula todos los elementos para poder
 * trabajar con la navegacion del proyecto
 * 
 * Route - permite añadir el elemento dentro de BrowserRouter
 * 
 * path- para indicar la url.
 * exact - si queremos que funcione única y exactamente con la url que le digamos.
 * component - para indicarle el componente que va a renderizar.
 * 
 * 
 * <Route component={NotFound} /> Manejamos el error
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
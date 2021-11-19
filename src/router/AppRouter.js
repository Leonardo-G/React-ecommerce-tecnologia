import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { SearchContainer } from '../components/busqueda/SearchContainer';
import { Cart } from '../components/cart/Cart';
import { ItemListContainer } from '../components/catalogo/ItemListContainer';
import { Navegacion } from '../components/header/Navegacion';
import { ItemDetailContainer } from '../components/producto/ItemDetailContainer';

export const AppRouter = () => {

    return (
        <Router>
            <Navegacion />
            <Switch>
                <Route exact path="/busqueda" component={ SearchContainer } />
                <Route exact path="/category/:id" component={ ItemListContainer } />
                <Route exact path="/Item/:id" component={ ItemDetailContainer } />
                <Route exact path="/cart" component={ Cart } />
                <Route exact path="/" component={ ItemListContainer } />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

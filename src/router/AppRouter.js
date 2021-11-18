import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Search } from '../components/busqueda/Search';
import { Cart } from '../components/cart/Cart';
import { Item } from '../components/catalogo/Item';
import { ItemListContainer } from '../components/catalogo/ItemListContainer';
import { Navegacion } from '../components/header/Navegacion';
import { ItemDetailContainer } from '../components/producto/ItemDetailContainer';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Navegacion />
                <Switch>
                    <Route exact path="/busqueda" component={ Search } />
                    <Route exact path="/category/:id" component={ ItemListContainer } />
                    <Route exact path="/Item/:id" component={ ItemDetailContainer } />
                    <Route exact path="/cart" component={ Cart } />
                    <Route exact path="/" component={ ItemListContainer } />

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

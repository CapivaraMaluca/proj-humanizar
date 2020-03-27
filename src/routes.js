/**
 * AQUI FICA AS ROTAS DO APLICATIVO, SÓ TEM ESSAS DUAS PORQUE SÓ FOI CRIADO A TELA DE LOGIN E
 * AINDA VAI SER CRIADO A TELA DE CADASTRO!
 * 
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}
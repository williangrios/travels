import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/index.js";
import Reservas from "./pages/Reservas/index.js";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/reservas"  component={Reservas}/>
        </Switch>
    )
}
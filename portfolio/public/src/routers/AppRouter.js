
import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PageNotFound from "../components/PageNotFoundPage";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import ItemPage from "../components/ItemPage";

const AppRouter=()=>(
    <BrowserRouter>
        <div>
        <Header/>
            <Switch> 
            <Route path = "/" component={HomePage} exact = {true}/>
            <Route path = "/portfolio" component={Portfolio} exact = {true}/>
            <Route path = "/contact" component={Contact}/>
            <Route path = "/portfolio/:id" component={ItemPage}/>

            <Route component={PageNotFound}/>
         </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

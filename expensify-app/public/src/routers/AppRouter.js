
import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import PageNotFound from "../components/PageNotFoundPage";




console.log('hello');
const AppRouter=()=>(
    <BrowserRouter>
        <div>
        <Header/>
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={PageNotFound}/>
         </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

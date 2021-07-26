import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LinksPage from '../src/pages/LinksPage';
import CreatePage from '../src/pages/CreatePage';
import DetailPage from '../src/pages/DetailPage';
import AuthPage from '../src/pages/AuthPage';
import Profile from './pages/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';
import IsAuth from './pages/IsAuth';
import Vacancies from './pages/Vacancies';
import Courses from './pages/Courses';
import DialogsContainer from './pages/Dialogs/DialogsContainer';

export const useRoutes = (isAuthenticated, props) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage/>
                </Route>
                <Route path="/profile">
                    <Profile state={props.state}  dispatch={props.dispatch} />
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer state={props.state} dispatch={props.dispatch} />
                </Route>
                <Route path="/isauth">
                    <IsAuth/>
                </Route>
                <Route path="/vacancies">
                    <Vacancies/>
                </Route>
                <Route path="/courses">
                    <Courses/>
                </Route>
                <Redirect to='/create'/>
            </Switch>
        )
    }
        return (
            <Switch>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    
}

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LinksPage from '../src/pages/LinksPage';
import CreatePage from '../src/pages/CreatePage';
import DetailPage from '../src/pages/DetailPage';
import AuthPage from '../src/pages/AuthPage';
import ProfileContainer from './pages/Profile/ProfileContainer';
import Vacancies from './pages/Vacancies';
import Courses from './pages/Courses';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import UsersContainer from './pages/Users/UsersContainer';

export const useRoutes = (isAuthenticated, props) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Route path="/profile/:userId?">
                    <ProfileContainer state={props.state} dispatch={props.dispatch} />
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer state={props.state} dispatch={props.dispatch} />
                </Route>
                <Route path="/vacancies">
                    <Vacancies />
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/users">
                    <UsersContainer state={props.state} dispatch={props.dispatch}/>
                </Route>
                <Redirect to='/create' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Route path="/users">
                <UsersContainer />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}

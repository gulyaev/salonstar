import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LinksPage from '../src/pages/LinksPage';
import CreatePage from '../src/pages/CreatePage';
import DetailPage from '../src/pages/DetailPage';
import AuthPageContainer from '../src/pages/AuthPageContainer';
//import ProfileContainer from './pages/Profile/ProfileContainer';
//import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Vacancies from './pages/Vacancies';
import ResumeContainer from './pages/ResumeContainer';
import Courses from './pages/Courses';
import UsersContainer from './pages/Users/UsersContainer';
import TestPage from './pages/Test/TestPage.jsx';
import MyProfile from './pages/Profile/MyProfile.jsx';
import Grid from './pages/Grid/Grid.jsx';
const DialogsContainer = React.lazy(() => import('./pages/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'));

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
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <ProfileContainer state={props.state} dispatch={props.dispatch} />
                    </React.Suspense>
                </Route>
                <Route path="/dialogs">
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <DialogsContainer state={props.state} dispatch={props.dispatch} />
                    </React.Suspense>
                </Route>
                <Route path="/vacancies">
                    <Vacancies />
                </Route>
                <Route path="/resume">
                    <ResumeContainer />
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/users">
                    <UsersContainer state={props.state} dispatch={props.dispatch}/>
                </Route>
                <Route path="/test">
                    <TestPage />
                </Route>
                <Route path="/myprofile">
                    <MyProfile />
                </Route>
                <Route path="/grid">
                    <Grid />
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPageContainer />
            </Route>
            <Route path="/users">
                <UsersContainer />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
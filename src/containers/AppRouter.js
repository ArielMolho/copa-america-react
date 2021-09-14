import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import GroupsContainer from './GroupsContainer/GroupsContainer';
import TeamContainer from './TeamContainer/TeamContainer';
import Calendar from '../components/Calendar/Calendar';
import CommentsContainer from './CommentsContainer/CommentContainer';
import Footer from '../components/Footer/Footer';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';

class Main extends Component {
    render (){
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/grupos" component={GroupsContainer} />
                    <Route exact path="/calendario" component={Calendar} />
                    <Route path="/equipos/:paisId" component={TeamContainer} />
                    <Route exact path="/commentarios" component={CommentsContainer} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default Main;
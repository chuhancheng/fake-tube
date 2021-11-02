'use strict';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
    useHistory
} from "react-router-dom";
import './style/styles.scss';
import Header from './component/header';
import Home from './pages/home';

class MainWindow extends React.Component {
    render() {
        return (
            <div>
                
                <HashRouter>
                    <Header/>
                    {/* <Switch>遍歷它所有的子層<Route>，然後只渲染與它當前location匹配的第一個<Route/> */}
                    {/* https://ithelp.ithome.com.tw/articles/10205186 */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <MainWindow />,
    document.getElementById('content')
);
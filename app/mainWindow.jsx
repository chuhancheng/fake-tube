'use strict';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
    useHistory
} from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const changeRoute = () => {
        history.push('/firstPage')
    }

    return (
        <>
            Hello world!!
            <button type="button" onClick={changeRoute}>change page</button>
        </>
    )
}

const FirstPage = () => {
    const history = useHistory();

    const changeRoute = () => {
        history.push('/')
    }

    return (
        <>
            FirstPage!!
            <button type="button" onClick={changeRoute}>change page</button>
        </>
    )
}

class MainWindow extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    {/* <Switch>遍歷它所有的子層<Route>，然後只渲染與它當前location匹配的第一個<Route/> */}
                    {/* https://ithelp.ithome.com.tw/articles/10205186 */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/firstPage" component={FirstPage} />
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
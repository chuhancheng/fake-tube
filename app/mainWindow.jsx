'use strict';
import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route
} from "react-router-dom";

class MainWindow extends React.Component {

    state = {
        message: ''
    }

    constructor(props) {
        super(props);
    }

    handleTextChange = (event) => {
        this.setState({
            message: event.target.value
        });
    }

    render() {
        return (
            <div>
                Hello world!!
                <hr />
                <input type="text" onChange={this.handleTextChange} />
                <p><strong>你輸入的是</strong></p>
                <p>
                    <span>{this.state.message}</span>
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <MainWindow />,
    document.getElementById('content')
);
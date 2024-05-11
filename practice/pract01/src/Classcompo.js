import React, { Component } from "react";

export default class Classcomp extends Component{


    state = {obj: {word:"hello"}}

    handleChange = () => {
        this.setState({obj:{word:"bye"}})
    }

    render() {
        return(

            <div>
                <h1>{this.state.obj.word}</h1>
                <button onClick={this.handleChange}></button>
            </div>
        )
    }
}
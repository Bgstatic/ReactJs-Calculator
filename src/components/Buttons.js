import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class Buttons extends Component {
    render() {
        return (

            <Button variant="outline-success" id={`calc-button${this.props.tagName}`} onClick={() => this.props.action(this.props.symbol)} >{this.props.symbol}</Button>

        )
    }
}

export default Buttons;

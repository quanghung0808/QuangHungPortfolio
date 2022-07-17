import React, { Component } from 'react';
import { decreaseAge, increaseAge } from './ActionCreater';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        description: state.description
    }
}

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }
    incre = () => {
        this.props.dispatch(increaseAge('test increaseAge'));
    }
    decre = () => {
        this.props.dispatch(decreaseAge('test decreaseAge'));
    }
    render() {
        return (
            <div>
                <h3>your name: {this.props.name}</h3>
                <h3>your age:</h3>
                <button onClick={this.decre}>-</button>
                {this.props.age}
                <button onClick={this.incre}>+</button>
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}

export default connect(mapStateToProps)(TestComponent);
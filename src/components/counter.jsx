import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <button className={this.getButtonClasses()}>{this.formatCount()}</button>
                <button className="btn btn-info m-2">Increment</button>
            </div>
        );
    }

    getButtonClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.state.count === 0) ? "secondary" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <button className={this.getButtonClasses()}>{this.formatCount()}</button>
                <button onClick={this.handleIncrement} className="btn btn-info m-2">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
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
import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({count: this.state.count + 1 });
        setTimeout(this.increment.bind(this), 1000 );
    }

    render() {
        return(
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <Link to="/">Go back home</Link>
            </div>
        )
    }
} 

export default Counter;

// <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
    // <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value1: "",
             value2: ""
        }
    }
    render() {
        return (
            <div>
                <input class="input1" type="text" pattern="[0-9]+" title="enter numeric value only" placeholder="Units" value={this.state.value1} onChange={this.handleValue1} required></input>
                <label> &#x3d; </label>
                <input class="input2" type="text" pattern="[0-9]+" title="enter numeric value only" placeholder="Units" value={this.state.value2} onChange={this.handleValue2} required></input>
            </div>
        )
    }
}

export default Input

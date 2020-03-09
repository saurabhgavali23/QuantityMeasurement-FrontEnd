import React, { Component } from 'react'
import "./app.css"
import UnitList1 from "./UnitList1"


class Form extends Component {

    handleSubmit = event => {

    }
    render() {
        return (
            <div className="main">
                <div className="mainBody" onSubmit={this.handleSubmit}>
                    <h1 className="h1">Unit Converter</h1>
                    <div>
                        <UnitList1 />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form

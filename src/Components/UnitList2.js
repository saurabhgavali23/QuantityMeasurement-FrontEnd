import React, { Component, Fragment } from 'react'
import {getDataFromServer} from './AxiosConfiguration'

class UnitList3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unit1:'FEET',
            unit2:'FEET',
            value1: 0,
            value2: 0,
        }       
    }

    handleUpdateUnit(value1) {        
        this.setState({
            unit1: value1[0],
            unit2: value1[0]
        })        
    }
    changeUnit1 = event => {

        this.setState({
            unit1: event.target.value
        })       
    }

    changeUnit2 = event => {
        this.setState({
            unit2: event.target.value,
        })
    }

    handleValue1 = event => {
        this.setState({
            value1: event.target.value
        })
    }

    handleValue2 = event => {
        this.setState({
            value2: event.target.value
        })
    }

    handleData = () => {

        let data = [
            {
                value: this.state.value2,
                unit: this.state.unit2
            },
            {
                value: this.state.value1,
                unit: this.state.unit1
            }
        ]
        
        getDataFromServer(data).then(response => {
            
            this.setState({
                value2: response.data.value
            })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        const unitfield1 = this.props.value1.map((value,index)=>{
            return(
            <option key={index}>{value}</option>
            )
        })
           
        return (
            <Fragment>
                <div className="flexOrder">
                    <input className="input1" type="number" min="0" style={{order:2}} value={this.state.value1} onChange={this.handleValue1} autoFocus></input>
                    <input className="input2" type="number" min="0" style={{order:4}} value={this.state.value2} onChange={this.handleValue2}></input>
                </div>
                <div className="flexOrder">
                <select className="list2" style={{order:3}} value={this.state.unit1} onChange={this.changeUnit1}>
                    {unitfield1}
                </select>
                <select className="list3" style={{order:5}} value={this.state.unit2} onChange={this.changeUnit2}>
                    {unitfield1}
                </select>
                </div>
                <div>
                    <br></br>
                    <button className="button button1" type="submit" onClick={this.handleData}>Convert</button>
                </div>
            </Fragment>
        )
    }
}

export default UnitList3

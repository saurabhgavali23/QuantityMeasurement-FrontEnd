import React, { Component } from 'react'
import UnitList3 from "./UnitList2"
import {getUnitList1,getUnitTypes} from './AxiosConfiguration'

class UnitList1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unit: " ",
            unitList1: [],
            unitArray1: []
        }
        this.UnitList3 = React.createRef()
    }

    componentWillMount() {

        getUnitList1().then(resp => {
            console.log(resp.data);
            
            this.setState({
                unitList1: resp.data
            })
       
        getUnitTypes(this.state.unitList1[0])
                .then(res=>{
                    this.setState({
                        unitArray1: res.data
                    })
                })
        }).catch(err=>{console.log(err)})
    }

    changeUnit = event => {
    
        this.setState({
            unit: event.target.value
        })
        
        getUnitTypes(event.target.value).then(res=>{
            this.setState({
                unitArray1: res.data
            })
            this.UnitList3.current.handleUpdateUnit(res.data)
        })
        
    }

    render() {
        let unitList1 = this.state.unitList1.map((value,index)=>{
            return(
            <option key={index}>{value}</option>
            )
        })
        return (
            <div>
                <div className="flexOrder">
                <select className="list1" value={this.state.unit} onChange={this.changeUnit}>
                    {unitList1}
                </select>
                </div>
                <UnitList3 ref={this.UnitList3} value1={this.state.unitArray1} />
            </div>
        )
    }
}

export default UnitList1

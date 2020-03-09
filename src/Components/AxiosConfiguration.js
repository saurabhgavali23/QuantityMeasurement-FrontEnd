import {getUrlOfConversion,getDataOfUnitList1,getUnitTypesList} from './Environment' 
const axios = require('axios');

export function getDataFromServer(data1) {
    return axios({
        method: 'post', headers: { "Content-Type": "application/json" },
        url: getUrlOfConversion,
        data: JSON.stringify(data1),
    })
}

export function getUnitList1() {
    return axios.get(getDataOfUnitList1)
}

export function getUnitTypes(unitTypes) {
    return axios.get(getUnitTypesList+unitTypes)
}


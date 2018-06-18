import axios from 'axios'

const URL = "http://localhost:8080/backend/tns/vuelos"

async function getAllFlights(){
    return axios.get(URL+ '/')
}

export {getAllFlights}

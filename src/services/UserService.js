import axios from 'axios'

const URL = "http://localhost:8080/backend/tns/usuarios"

async function reservateFlight(user,flight){
    return axios.post(URL+ '/'+user+'/join',flight)
}

async function getAllUserFlights(user){
    return axios.get(URL + '/'+user)
}

export default {reservateFlight, getAllUserFlights}
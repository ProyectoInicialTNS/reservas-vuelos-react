import axios from 'axios'

const URL = "http://localhost:8080/backend/tns/vuelos"
export async function getAllFlights(){
    const f = await axios.get(URL+ '/').then(
        response => response
    )
    return f;
    
}

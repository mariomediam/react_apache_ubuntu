import axios from "axios"

const URL = `${process.env.REACT_APP_API}`

const login = async (usuario, password) => {
    let credenciales = {
        usuario:usuario,
        password:password
    }
    
    try {        
        const headers = {
            "Content-Type": "application/json"
        }
        let { data: {data} } = await axios.post(`${URL}/login/`, credenciales, { headers })
               
        return data[0]

    } catch (error) {
        throw error
    }
}
export{
    login
}
import { Api_url } from '../approutes.js'
import axios from 'axios'

export const signup = async(payload) => {
    const responsebody = {
        responseData: null,
        hasError: false,
        error: null
    }
    try {
        const response = await axios.post(`${Api_url}/signup`, payload);
        responsebody.responseData = response.data;
        return responsebody
    }
    catch(error){
        responsebody.hasError = true;
        responsebody.error = error
        return responsebody;
    }
}
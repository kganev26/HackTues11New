import axios from 'axios';
import { server_adress } from './constants';

export const getSatelliteById = async (id) => {
    try {
        const response = await axios.get(`${server_adress}/balance`)

        return response.data;
    }catch(error)
    {
        throw error;
    }
}
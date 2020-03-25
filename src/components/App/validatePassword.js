import axios from 'axios';
import {API_URL} from '../../config';

export default function validatePassword({password}){
    return axios.post(`${API_URL}`, {password}).then(({data})=>{
        return data;
    });
}

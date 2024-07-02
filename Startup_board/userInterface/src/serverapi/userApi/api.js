import axios from "axios";
import { BASE_URL, USER_REGISTER } from "../../utils/constant";

function RegisterUser(data){
    return axios.post(BASE_URL+USER_REGISTER,data=data)
}


import axios from "axios";

export const reqVerifyCode = phone => axios.post('url', { phone })

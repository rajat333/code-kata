import axios from "axios";

export const getRequest = (url: string): Promise<any> => {

    return axios.get(url);
};

export const postRequest = (url: string, payload: any): Promise<any> => {

    return axios.post(url, payload);
};

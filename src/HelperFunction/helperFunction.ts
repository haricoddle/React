import axios from "axios";

export const apiRequest = async (url: string, method: string, data?: any) => {
    try {
        const baseURL = `${process.env.REACT_APP_URL}`
        const fullURL = baseURL + url;
        const response = await axios({
            method,
            url: fullURL,
            data,
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        });
        return response
    } catch (error) {
        console.log(error);
        throw (error);
    }
};
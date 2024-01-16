import axios from "axios";

export const apiRequest = async (url: string, method: string, data?: any) => {
    try {
        const response = await axios({
            method,
            url,
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
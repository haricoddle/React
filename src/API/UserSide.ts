import { apiRequest } from '../HelperFunction/helperFunction'

export const loginAPI = async (body: any) => {
    const res = await apiRequest('/customer/login', 'post', body);
    return res;
}

export const showVehicleAPI = async () => {
    const res = await apiRequest('/parts/showAll', 'get')
    return res;
}

export const addToCartAPI = async (body: any) => {
    const res = await apiRequest('/cart/addToCart', 'post', body);
    return res;
}

export const newBookingAPI = async (body: any) => {
    const res = await apiRequest('/bookings/newBookings', 'post', body);
    return res;
}

export const serviceBookingAPI = async (body: any) => {
    const res = await apiRequest('/service/booking', 'post', body);
    return res;
}
export const showCartAPI = async () => {
    const res = await apiRequest('/cart/showCart', 'post');
    return res;
}

export const createUserAPI = async (body: any) => {
    const res = await apiRequest('/customer/register', 'post', body);
    return res;
}

export const showVehiclesAPI = async () => {
    const res = await apiRequest('/vehicle/allVehicles', 'get');
    return res;
}

export const decrementCartAPI = async (body: any) => {
    const res = await apiRequest('/cart/deleteeQuantity', 'post', body);
    return res;
}
export const incrementCartAPI = async (body: any) => {
    const res = await apiRequest('/cart/adddQuantity', 'post', body);
    return res;
}
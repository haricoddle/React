import { apiRequest } from "../HelperFunction/helperFunction";

export const employeeloginAPI = async (body: any) => {
  const res = await apiRequest('/employee/empLogin', 'post', body);
  return res;
}

export const addPartsAPI = async (body: any) => {
  const res = await apiRequest('/parts/addParts', 'post', body);
  return res;
}

export const updatePartsAPI = async (body: any) => {
  const res = await apiRequest('/parts/updateParts', 'put', body);
  return res;
}

export const showBookingsAPI = async () => {
  const res = await apiRequest('/bookings/showBookings', 'get');
  return res;
}

export const deleteBookingsAPI = async (body: any) => {
  const res = await apiRequest('/bookings/removeBooking', 'put', body);
  return res;
}

export const serviceBookingsAPI = async () => {
  const res = await apiRequest('/service/showBookings', 'get');
  return res;
}

export const editServiceBookingsAPI = async (body: any) => {
  const res = await apiRequest('/service/update', 'post', body);
  return res;
}

export const showCustomerAPI = async () => {
  const res = await apiRequest('/customer/showDetails', 'get');
  return res;
}

export const deleteCustomerAPI = async (body: any) => {
  const res = await apiRequest('/customer/delete', 'post', body);
  return res;
}

export const addEmployeeAPI = async (body: any) => {
  const res = await apiRequest('/employee/register', 'post', body);
  return res;
}

export const addVehicleAPI = async (body: any) => {
  const res = await apiRequest('/vehicle/addVehicle', 'post', body);
  return res;
}
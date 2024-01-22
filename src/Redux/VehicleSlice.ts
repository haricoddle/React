import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Vehicle = {
    id: string,
    model_name: string,
    cc: number,
    price: number,
    image_url: string,
}

const initialVehicleState: Vehicle[] = [];

const vehicleSlice = createSlice({
    name: 'vehicles',
    initialState: initialVehicleState,
    reducers: {
        setVehicleDetails: (state, action: PayloadAction<Vehicle[]>) => {
            return action.payload
        },
    }
});

export const { setVehicleDetails } = vehicleSlice.actions;
export default vehicleSlice.reducer;
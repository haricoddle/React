import { configureStore } from "@reduxjs/toolkit";
import vehicleReduser from './VehicleSlice';

const store = configureStore({
    reducer: {
        vehicles: vehicleReduser,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

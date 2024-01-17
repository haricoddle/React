import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import vehicleReduser from './VehicleSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        vehicles: vehicleReduser,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from "@reduxjs/toolkit";
import vehicleReduser from './Slice/VehicleSlice';
import accessoryReduser from './Slice/AccessorySlice'
import cartReduser from './Slice/CartSlice';

const store = configureStore({
    reducer: {
        vehicles: vehicleReduser,
        accessory: accessoryReduser,
        cart: cartReduser,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

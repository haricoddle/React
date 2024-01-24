import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Accessories = {
    id: string,
    name: string,
    price: string,
    stock: string,
    image_url: string
}

const initialAccessoriesState: Accessories[] = [];

const accessoriesSlice = createSlice({
    name: 'accessories',
    initialState: initialAccessoriesState,
    reducers: {
        setAccessoriesDetails: (state, action: PayloadAction<Accessories[]>) => {
            return action.payload
        },
    }
});

export const { setAccessoriesDetails } = accessoriesSlice.actions;
export default accessoriesSlice.reducer;
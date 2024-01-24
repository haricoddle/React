import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Cart = {
    id: string,
    name: string,
    image_url: string,
    quantity: string,
    price: string,
}

const initialCartState: Cart[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setCartDetails: (state, action: PayloadAction<Cart[]>) => {
            return action.payload
        },
    }
});

export const { setCartDetails } = cartSlice.actions;
export default cartSlice.reducer;
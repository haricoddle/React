import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: string,
    name: string,
    roles: string,
    userName: string,
}

const initialState: User = {
    id: '',
    name: '',
    roles: '',
    userName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;

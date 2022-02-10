import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        isSendedMessage: false,
        name: '',
        email: '',
        phone: '',
        message: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name;
        },    
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setPhone: (state, action) => {
            state.phone = action.payload.phone;
        },    
        setMessage: (state, action) => {
            state.message = action.payload.message;
        },
        setIsSendedMessage: (state, action) => {
            state.isSendedMessage = action.payload.isSended; 
        }
    },

})

export const { setName, setPhone, setEmail, setMessage, setIsSendedMessage} = contactSlice.actions

export default contactSlice.reducer
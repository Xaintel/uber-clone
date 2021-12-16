import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    origin: null,
    destination: null,
    travelTimeInformation: null,

} 
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin:(state, action) =>{
            state.origin = action.payload
        },
        setDestination:(state, action) =>{
            state.destination = action.payload
        },
        setTraveltimeInformation:(state, action) =>{
            state.travelTimeInformation = action.payload
        },
    },
});

export const { setOrigin,setDestination,setTraveltimeInformation } 
= navSlice.actions;


//selectos

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimetravelInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
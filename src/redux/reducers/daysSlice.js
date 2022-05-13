import { createSlice } from "@reduxjs/toolkit"

export const daysSlice = createSlice ({
    name:"days",
    initialState: {
        data: []
    },
    reducers: {
        days: (state, action) => {
            state.data = action.payload
        }
    }

})

export const { days } = daysSlice.actions

export default daysSlice.reducer
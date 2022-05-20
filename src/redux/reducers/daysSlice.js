import {
    createSlice
} from "@reduxjs/toolkit"
import {
    GET
} from "../../api/service"

export const daysSlice = createSlice({   
    name: "days",
    initialState: {
        data: []
    },
    reducers: {
        daysData: (state, action) => {
            const product = GET("product/productlist")

            state.data = product.message
        }
    }

})

export const { daysData } = daysSlice.actions

export default daysSlice.reducer
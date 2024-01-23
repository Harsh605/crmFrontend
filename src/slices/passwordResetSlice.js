import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const forgetPassword = createAsyncThunk("forgetPassword", async ({email},{ rejectWithValue }) => {
    // let url = `https://crmbackend.metablocktechnologies.org/api/v1/password/forget`
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
    try {
        const response = await axios.post(`https://crmbackend.metablocktechnologies.org/api/v1/password/forget`, {email}, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const resetPassword = createAsyncThunk("resetPassword", async ({token,password,confirmPassword},{ rejectWithValue }) => {
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/password/reset/${token}`
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
    try {
        const response = await axios.put(url,{password,confirmPassword},config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

export const resetPasswordSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        error: null,
        message:null,
        isUpdated : false
        
    },
    extraReducers: (builder) => {
        builder
          
            .addCase(forgetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message
            
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.message = null

            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message
                state.isUpdated = action.payload.success
            
                
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.message = null
                state.isUpdated = false

            })
           
            


    }
})

export default resetPasswordSlice.reducer
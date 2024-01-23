import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import leadSlice from "./slices/leadSlice"
// import userSlice  from "./slices/userSlice.js"


const store = configureStore({
    reducer: {
        userCustom: userSlice,
        leadCustom: leadSlice,
      
    }
})

export default store
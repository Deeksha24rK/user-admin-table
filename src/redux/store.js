import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import adminSlice from "./slices/AdminSlice";

// Step 1: Create a Redux Store

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        admins: adminSlice.reducer
    } // access to all microreducers to store
})

export default store
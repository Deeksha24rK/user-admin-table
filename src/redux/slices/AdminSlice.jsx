import { createSlice, nanoid } from '@reduxjs/toolkit'
import { deleteAllUsers } from '../actions/deleteAllUsersAction'

const initialState = {
    admin: []
}

const adminSlice = createSlice({
    name: 'admin',// type:Admin/...
    initialState,
    reducers: {
        addAdmin: (state, action) => {
            console.log("state", state)
            console.log("action", action)
            const admin = {
                id: nanoid(),
                name: action.payload
            }
            state.admin.push(admin)
        },
        removeAdmin: (state, action) => {
            state.admin = state.admin.filter(ad => ad.id !== action.payload)
        }
    },

    // Add extra Reducer
    // This setup allows for modular and interconnected state management, where actions in one slice can trigger responses in another slice.
    extraReducers: (builder) => {
        // builder.addCase(userSlice.actions.deleteUsers, () => initialState)
        builder.addCase(deleteAllUsers, () => console.log("Hello there"))
    }
})

export const { addAdmin, removeAdmin } = adminSlice.actions

export default adminSlice // exporting the entire reducer , to wire up with store
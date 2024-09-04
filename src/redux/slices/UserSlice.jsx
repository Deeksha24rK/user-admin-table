import { createSlice, nanoid } from '@reduxjs/toolkit'
import { deleteAllUsers } from '../actions/deleteAllUsersAction'

const initialState = {
    users: []
}

// Step 2: Define slices

// Use createSlice to define slices of the state, which include the initial state, reducers(actions), and optionally extraReducers for handling external actions or async thunks.
const userSlice = createSlice({
    name: 'user', // type:user/...
    initialState,
    reducers: {
        // state of userSlice i.e users
        // microreducers - action creators
        addUser: (state, action) => {

            console.log("state", state)
            console.log("action", action)

            const user = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(user)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        // 1.
        // deleteUsers: () => initialState
        // {
        //     state.users = [] // Do not assign it
        // }
    },

    extraReducers: (builder) => {
        builder.addCase(deleteAllUsers, () => {
            return initialState;
        });
    }
})

export const { addUser, removeUser, deleteUsers } = userSlice.actions

export default userSlice // exporting the entire reducer , to wire up with store
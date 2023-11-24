import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'login',
    initialState: {
    },
    reducers: {
        loginReq: (state, action) => {
            state.loading = true
        },
        loginSucess: (state, action) => {
            state.loading = false
            state.user = action.payload
            console.log(action.payload);
        },
        loginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // For Register

        registerReq: (state, action) => {
            state.loading = true
        },
        registerSucess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        registerFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    }
})

export const { loginReq, loginSucess, loginFail, registerReq, registerSucess, registerFail } = userSlice.actions
export default userSlice.reducer
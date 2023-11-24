import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Actions/userSlice'
export default configureStore({
    reducer: {
        user: userSlice
    }
})
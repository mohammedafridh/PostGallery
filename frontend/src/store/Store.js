import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/UserSlice'
import postReducer from '../slices/PostSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        post:postReducer
    }
})
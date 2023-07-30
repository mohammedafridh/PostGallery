import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:'post',
    initialState:{
        posts:[]
    },

    reducers:{
        createPost:(state,action)=>{
            state.posts.push(action.payload);
        },
        viewAllPosts:(state,action)=>{
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            const postId = action.payload;
            state.posts = state.posts.filter(post => post._id !== postId);
          },
    }
})

export const {createPost,viewAllPosts,deletePost} = postSlice.actions;
export const selectPost = (state)=>state.post.posts;
export default postSlice.reducer;
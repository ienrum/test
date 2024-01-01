import { createSlice } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [{ id: 2, title: '제목2', content: 'content2' }],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;

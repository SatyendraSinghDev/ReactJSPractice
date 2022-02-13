import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 2nd parameter is cb fun which is responsible to make the request
export const getPost = createAsyncThunk("post/getPost", async ({ id }) => {
  // above we destructure the id
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (res) => {
      return res.json();
    }
  );
});

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id }) => {
    // above we destructure the id
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ values }) => {
    // above we destructure the id
    return fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        body: values.body,
      }),
    }).then((res) => {
      return res.json();
    });
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async ({ id, body, title }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    }).then((res) => res.json());
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
    body: "",    // Some addition state define for edit part
    edit: false,
  }, 
  reducers: {          // define extra action in reducers which is responsible to enables the state or edit state
    setEdit: (state, action) => {
      state.edit = action.payload.edit;  // edit mode
      state.body = action.payload.body;  // body part
    },
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updatePost.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [updatePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setEdit } = postSlice.actions;  // export single action

export default postSlice.reducer;

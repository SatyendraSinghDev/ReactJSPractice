import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",              // store name
    initialState: {        // create initial state
        name: "Satty",
        email: "satty@gmail.com"
    },
    reducers: {            // create a reducer and it includes our action, and action will takes our state and perform some action
        update: (state, action) => {
            // action.payload = {"newname", "newemail@gmai.com"}
            state.name = action.payload.name;  // state ka name update krdo yeh new name se
            state.email = action.payload.email;
        },
        // remove: (state,action) => { // here i dont need action because in this app i have only one user
        // remove: (state) => {
        //     state = null; // take this state and make it null because i dont have any user
        // }  .. note yahan hume object bhi nahi chaie kuki we are not updating email or username
        // remove: (state) => (state = null) // take this state and make it null because i dont have any user
        remove: (state) => (state = {}), // or write empty object, name and email will be there but they will be empty
        // addHello: (state, action) => {
        //     state.name = "Hello " + action.payload.name; 
        //     // state.email = action.payload.email;
        // },
    }   
});

export const { update, remove, addHello } = userSlice.actions;  // export my actions, action ko export isliye kiya hai kuki jab mein update.jsx ke update button per click kru toh is action ko wahan se dispatch kr saku

export default userSlice.reducer;  // export default isko isliye kiya kuki kisi bhi name se isko export or import kr ske ab

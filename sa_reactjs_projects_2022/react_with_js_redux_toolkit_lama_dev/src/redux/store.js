import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";

// create our store
export default configureStore({
    reducer: {
        user: userReducer
    }
});

// So now ab is store ko use kese krege toh iske liye aoni puri application ko hume wrap karna padega taki sare component ko store mil sake provider ke through wrap karege



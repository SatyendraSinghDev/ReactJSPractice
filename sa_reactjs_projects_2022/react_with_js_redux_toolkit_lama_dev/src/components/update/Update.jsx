import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update, remove, addHello } from "../../redux/userSlice";

export default function Update() {

  // send information to our reducers at the begining is empty because we did not wrote anything in our inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);  // but this time i need every information at here

  const dispatch = useDispatch();  // lets dispatch my action
  
  // user = {name: name,email: email}; you can also do like that
  
  const handleUpdate = (e) => {
    e.preventDefault(); // to avoid default behaviour of hml over submit button
    dispatch(update({name,email})); // dispatch(action, give my payload);
    // dispatch(update(user));
    // dispatch(addHello({name}));
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove()); 
  }

  // console.log(`name ${name} and ${email}`); // And in this case when i click on update button i will send these changed value to reducer and there basically we have a action payload which means new username and new email
  
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                // placeholder="John"
                placeholder={user.name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                // placeholder="john@gmail.com"
                placeholder={user.email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

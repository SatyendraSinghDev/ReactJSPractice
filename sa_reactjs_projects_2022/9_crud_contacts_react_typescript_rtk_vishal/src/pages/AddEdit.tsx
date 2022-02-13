import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAddContactMutation,
  useContactQuery,
  useUpdateContactMutation,
} from "../services/contactsApi";
import "./AddEdit.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [addContact] = useAddContactMutation();  // Bring our query
  const [updateContact] = useUpdateContactMutation();

  const { name, email, contact } = formValue; // destructure all values here
  const navigate = useNavigate();

  const { id } = useParams(); 
  const { data, error } = useContactQuery(id!);  //For populate data into the respective form

  useEffect(() => {
    if (error && id) {
      toast.error("Something went wrong");
    }
  }, [error]);

  useEffect(() => {
    if (id) {  // For Edit Mode - We have the id that means user wants to update the existing record
      setEditMode(true); // enabled edit mode
      if (data) {
        setFormValue({ ...data });  // data have name, number, email so populating single values, so taht each values can gets enter to the respective fields
      }
    } else {  // For Add Mode
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, data]);

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e: any) => {  // Handle submit will be async
    e.preventDefault();
    if (!name && !email && !contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!editMode) { // Not in edit mode
        await addContact(formValue);  // used our query here and provide entire form value
        navigate("/"); // navigate to home
        toast.success("Contact Added Successfully"); // msg
      } else {
        await updateContact(formValue);
        navigate("/");
        setEditMode(false);
        toast.success("Contact Updated Successfully");
      }
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email ..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact no. ..."
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" value={editMode ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = (event) => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((response) => {
        //console.log("Post success: ", response.data);
        props.setFriends(response.data);
      })
      .catch((error) => {
        //console.log("Post error: ", error);
      });
    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChanges}
            placeholder="Jeff"
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleChanges}
            placeholder="21"
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleChanges}
            placeholder="jdog@example.com"
          />
        </label>

        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;

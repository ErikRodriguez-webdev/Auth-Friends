import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = (props) => {
  //local state
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        console.log(response.data);
        setFriends(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const signOut = () => {
    window.localStorage.removeItem("token");
    return props.history.push("/login");
  };

  return (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>
      <p>friendsList</p>
    </div>
  );
};
export default FriendsList;

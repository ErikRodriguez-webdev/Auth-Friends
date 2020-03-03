import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCard from "./FriendsCard";
import AddFriend from "./AddFriend";
import "../App.css";

const FriendsList = (props) => {
  //local state
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        //console.log(response.data);
        setFriends(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  const signOut = () => {
    window.localStorage.removeItem("token");
    return props.history.push("/login");
  };

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
      <h1 className="friendsTitle">Friends</h1>

      <AddFriend setFriends={setFriends} />

      <div className="allFriendsContainer">
        {friends.map((each) => (
          <FriendsCard
            key={each.id}
            name={each.name}
            age={each.age}
            email={each.email}
          />
        ))}
      </div>
    </div>
  );
};
export default FriendsList;

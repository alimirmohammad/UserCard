import React from "react";
import UserSelfCard from "./UserSelfCard";

const UserCard = props => {
  console.log(props);
  // return null;
  return <UserSelfCard user={props.myuser} />;
};

export default UserCard;

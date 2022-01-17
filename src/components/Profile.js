import React from "react";
import { MessageForm } from ".";

const Profile = ({ user }) => {
  return (
    <>
      <MessageForm />
      {user.messages.map((message) => {
        return <div>{message.content}</div>;
      })}
    </>
  );
};
export default Profile;

import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import Spinner from "../Loading/Spinner";

const User = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} users={user} />;
        })}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
};

User.propType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;

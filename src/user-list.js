import React from "react";
import {FlatList} from "react-native";
import UserActions from "./user-actions";
import UserItem from "./user-item";

const UserList = ({ users }) => {
  return (
    <FlatList
      data={users}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
      renderQuickActions={UserActions}
    />
  );
};

export default UserList;
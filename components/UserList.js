import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const UserList = () => {
  // Sample user data
  const users = [
    { id: 1, name: "Amit ", avatar: require("../assets/user1.png") },
    { id: 2, name: "Raghav ", avatar: require("../assets/user1.png") },
    { id: 3, name: "Ramesh", avatar: require("../assets/user1.png") },
    { id: 4, name: "Suresh", avatar: require("../assets/user1.png") },
    { id: 5, name: "Paresh", avatar: require("../assets/user1.png") },
    { id: 6, name: "Sagar", avatar: require("../assets/user1.png") },
    // Add more users as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List Screen</Text>
      <View style={styles.userList}>
        {users.map((user) => (
          <View style={styles.userContainer} key={user.id}>
            <Image source={user.avatar} style={styles.avatar} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userList: {
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserList;

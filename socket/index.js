const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
const getUsers = (userId) => {
  console.log("getusers", users, userId);
  return users.find((user) => user.userId === userId);
};
io.on("connection", (socket) => {
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    const filteredUsers = users.filter((user) => user.userId !== userId);
    io.emit("getUsers", filteredUsers);
  });
  socket.on("sendMessage", ({ userId, receiverId, text }) => {
    console.log("data coming in", userId, receiverId, text);
    const users = getUsers(receiverId);
    console.log("users", users);
    if (users) {
      io.to(users.socketId).emit("getMessage", {
        userId,
        text,
      });
    }
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

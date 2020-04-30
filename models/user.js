const jwt = require("jsonwebtoken");

const users = [
  { username: "abhishek", id: 1, role: ["Admin"] },
  { username: "jeff", id: 2, role: ["Customer"] },
  {
    username: "tom",
    id: 3,
    role: ["Manager", "Accountant"],
  },
  { username: "mary", id: 4, role: ["Manager"] },
  { username: "liz", id: 5, role: ["Employee"] },
];

const getUsers = () => users;

const findUser = (user) => {
  const matchedUser = getUsers().find((u) => u.username === user.username);
  if (!matchedUser) return null;
};

const getUserJwt = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    "secret"
  );
};

module.exports.getUsers = getUsers;
module.exports.findUser = findUser;
module.exports.getUserJwt = getUserJwt;

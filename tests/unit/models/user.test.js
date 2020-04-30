const { getUserJwt } = require("../../../models/user");
const jwt = require("jsonwebtoken");

describe("userJwt", () => {
  it("should return a valid user jwt for a user", () => {
    const user = { username: "a", role: ["b", "c"], id: 1 };
    const { username, ...payload } = user;

    const token = getUserJwt(user);
    const decoded = jwt.verify(token, "secret");

    expect(decoded).toMatchObject(payload);
  });
});

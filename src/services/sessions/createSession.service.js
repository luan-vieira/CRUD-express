import users from "../../database/index";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const createSessionService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }
  const token = jwt.sign(
    { email: email, isAdm: user.isAdm, uuid: user.uuid },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return token;
};
export default createSessionService;

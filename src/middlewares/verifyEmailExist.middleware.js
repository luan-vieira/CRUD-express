import users from "../database";

const verifyEmailExistMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(400).json({ message: "Email or password invalid" });
  }

  next();
};
export default verifyEmailExistMiddleware;

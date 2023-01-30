import users from "../database/index";

const verifyAdmMiddleware = (req, res, next) => {
  const isAdm = req.userIsAdm;

  if (isAdm === false) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  next();
};
export default verifyAdmMiddleware;

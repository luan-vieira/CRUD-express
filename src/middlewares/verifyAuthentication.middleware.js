import jwt from "jsonwebtoken";

const verifyAuthenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ message: "Missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.userIsAdm = decoded.isAdm;
    req.userEmail = decoded.email;
    req.userUuid = decoded.uuid;
    req.userName = decoded.name;

    next();
  });
};

export default verifyAuthenticationMiddleware;

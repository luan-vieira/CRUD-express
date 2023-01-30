import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

import jwt from "jsonwebtoken";
import deleteUserService from "../services/users/deleteUser.service";
import profileUserService from "../services/users/profileUser.service";

const createUserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;
  const user = await createUserService(email, name, password, isAdm);

  return res.status(201).json(user);
};

const listUsersController = (req, res) => {
  const users = listUsersService();
  return res.json(users);
};

const updateUserController = (request, response) => {
  try {
    const id = request.params.id;
    const user = request.body;

    const updatedUser = updateUserService(id, user);

    return response.json(updatedUser);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  const deletedUser = deleteUserService(uuid);
  return response.json(deletedUser);
};

const profileUserController = (request, response) => {
  const uuid = request.userUuid;
  const user = profileUserService(uuid);
  try {
    let token = request.headers.authorization;

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      const { uuid } = decoded;

      return response.json(user);
    });
  } catch (error) {
    if (error) {
      return response
        .status(401)
        .json({ message: "missing authorization headers" });
    }
  }
  return user;
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
  profileUserController,
};

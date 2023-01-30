import users from "../../database/index";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    uuid: uuidv4(),
  };

  users.push(newUser);

  const readUser = {
    createdOn: new Date(),
    updatedOn: new Date(),
    uuid: newUser.uuid,
    email,
    name,
    isAdm,
  };

  return readUser;
};
export default createUserService;

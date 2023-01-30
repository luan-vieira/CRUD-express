import users from "../../database";

const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((element) => element.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }
  users.splice(userIndex, 1);

  return "deleted user";
};
export default deleteUserService;

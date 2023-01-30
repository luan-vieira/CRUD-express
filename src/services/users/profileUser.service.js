import users from "../../database";

const profileUserService = (uuid) => {
  const user = users.find((element) => element.uuid === uuid);
  if (!user) {
    return "user not found";
  }
  return user;
};
export default profileUserService;

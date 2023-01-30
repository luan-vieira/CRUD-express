import createSessionService from "../services/sessions/createSession.service";

const createSessionController = (req, res) => {
  try {
    const { email, password } = req.body;
    const token = createSessionService(email, password);
    return res.json({ token });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export default createSessionController;

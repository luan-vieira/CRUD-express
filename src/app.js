import express from "express";
import userRouter from "./routes/users.router";
import sessionRoutes from "./routes/session.router";
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRoutes);
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;

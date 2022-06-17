import express, { Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.send({ message: "Hello" });
});

export default app;

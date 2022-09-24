import express from "express";
import bodyParser from "body-parser";
import playersRouter from "./routes/players.js";

const app = express();
const PORT = 5000;

// Only parse incoming request bodies that comprised of json
app.use(bodyParser.json());
// Set the players root path
app.use("/players", playersRouter);

// Show a hello world message on the home page
app.get("/", (_req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});


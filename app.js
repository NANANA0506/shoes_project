const express = require("express");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./routers/globalRoter");

const PORT = 3050;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/product", globalRouter);

app.listen(PORT, () => {
  console.log(`⭐️👟https://localhost:${PORT} ✨SERVER START💻🍀`);
});

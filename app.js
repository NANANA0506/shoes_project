const express = require("express");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./routers/globalRoter");
const session = require("express-session");

const PORT = 3050;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(
  session({
    secret: "shoes_project",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", globalRouter);
app.use("/home", globalRouter);
app.use("/product", globalRouter);
app.use("/sigin", globalRouter);

app.listen(PORT, () => {
  console.log(`⭐️👟https://localhost:${PORT} ✨SERVER START💻🍀`);
});

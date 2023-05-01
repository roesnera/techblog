import express from 'express';
import path from 'path';

const app = express();

const PORT = 3000;

app.use(express.static(path.join(".", "dist")));
app.use(express.static(path.join(".", "dist", "About")));
app.use(express.static(path.join(".", "dist", "Articles")));

app.use(express.json);

app.get("/", (req, res) => {
    console.log("express route activated!");
    res.render("index");
});

app.get("/about", (req, res) => {
    console.log("express route activated!");
    res.render("about");
});

app.get("/articles", (req, res) => {
    console.log("express route activated!");
    res.render("articles");
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
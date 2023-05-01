import express from 'express';
import path from 'path';

const app = express();

const PORT = 3000;

app.use(express.static(path.join(".", "dist")));

app.use(express.json);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
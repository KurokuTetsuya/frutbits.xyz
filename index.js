const express = require("express");
const app = express();
const PORT  = process.env.PORT || 8080;
const { join } = require("path");

app.use("/assets", express.static(join(__dirname, "assets")));
app.use("/images", express.static(join(__dirname, "images")));
app.listen(PORT, () => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Listening to http://localhost:${PORT}/`);
});

app.get("/", (request, response) => {
    response.status(200).sendFile("index.html", { root: "." });
});
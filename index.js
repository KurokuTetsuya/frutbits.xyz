const express = require("express");
const app = express();
const PORT  = process.env.PORT || 8080;
const { join } = require("path");

app.use("/assets", express.static(join(__dirname, "assets")));
app.use("/images", express.static(join(__dirname, "images")));
app.use((req, res, next) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] ${req.headers["x-real-ip"] || req.ip} (${res.header["User-Agent"] || "No User-Agent"}) Requesting to ${req.path}`);
    return next();
});
app.listen(PORT, () => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Listening to http://localhost:${PORT}/`);
});

app.get("/", (request, response) => {
    response.status(200).sendFile("index.html", { root: "." });
});

app.get("/discord", (request, response) => response.status(200).redirect("https://discord.gg/fD5MHy9"));
app.get("/leaderboard", (request, response) => response.status(200).redirect("https://arcanebot.xyz/leaderboard/frutbits"));
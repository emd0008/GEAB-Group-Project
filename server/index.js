"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const api_1 = require("./api");
const passport_1 = require("./config/passport");
let app = express();
const prerender = require("prerender-node");
prerender.set("prerenderToken", process.env.PRERENDER_TOKEN);
app.use(prerender);
let clientPath = path.join(__dirname, "../client");
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
passport_1.default(app);
app.use("/api", api_1.default);
app.get("*", (req, res, next) => {
    if (isAsset(req.url)) {
        return next();
    }
    else {
        res.sendFile(path.join(clientPath, "index.html"));
    }
});
app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER LISTENING");
});
function isAsset(path) {
    let pieces = path.split("/");
    if (pieces.length === 0) {
        return false;
    }
    let last = pieces[pieces.length - 1];
    if (path.indexOf("/api") !== -1 || path.indexOf("/?") !== -1) {
        return true;
    }
    else if (last.indexOf(".") !== -1) {
        return true;
    }
    else {
        return false;
    }
}

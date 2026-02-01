"use strict";
exports.__esModule = true;
var app_js_1 = require("./app.js");
var port = process.env.PORT || 3000;
app_js_1.app.listen(port, function () {
    return console.log("Example app listening at http://localhost:".concat(port));
});

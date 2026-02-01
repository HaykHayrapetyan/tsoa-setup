"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
var routes_js_1 = require("../.tsoa/routes.js");
var swagger_ui_express_1 = require("swagger-ui-express");
var swagger_json_1 = require("../.tsoa/swagger.json");
exports.app = (0, express_1["default"])();
// Use body parser to read sent json payloads
exports.app.use((0, express_1.urlencoded)({
    extended: true
}));
exports.app.use((0, express_1.json)());
(0, routes_js_1.RegisterRoutes)(exports.app);
exports.app.use('/docs', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
exports.app.get('/', function (_, res) {
    res.json('Welcome to your Tsoa-Express-Swagger app');
});

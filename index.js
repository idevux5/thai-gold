"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var config_1 = require("./src/config");
var options = {
    logger: true,
};
var app = (0, app_1.default)(options);
app.listen(config_1.default.PORT, "0.0.0.0", function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Server running at port %d.", config_1.default.PORT);
});

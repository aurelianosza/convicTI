"use strict";
exports.__esModule = true;
var metadata_keys_1 = require("./metadata.keys");
var Controller = function (basepath) {
    return function (target) {
        Reflect.defineMetadata(metadata_keys_1.MetadataKeys.BASE_PATH, basepath, target);
    };
};
exports["default"] = Controller;

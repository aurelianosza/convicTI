"use strict";
exports.__esModule = true;
exports.Post = exports.Get = exports.Methods = void 0;
var metadata_keys_1 = require("./metadata.keys");
var Methods;
(function (Methods) {
    Methods["GET"] = "get";
    Methods["POST"] = "post";
})(Methods = exports.Methods || (exports.Methods = {}));
var methodDecorators = function (method) {
    return function (path) {
        return function (target, propertyKey) {
            var controllerClass = target.constructor;
            var routes = Reflect.hasMetadata(metadata_keys_1.MetadataKeys.ROUTES, controllerClass) ? Reflect.getMetadata(metadata_keys_1.MetadataKeys.ROUTES, controllerClass) : [];
            routes.push({
                method: method,
                path: path,
                handleName: propertyKey
            });
            Reflect.defineMetadata(metadata_keys_1.MetadataKeys.ROUTES, routes, controllerClass);
        };
    };
};
exports.Get = methodDecorators(Methods.GET);
exports.Post = methodDecorators(Methods.POST);

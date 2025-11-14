"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useNavigation = require("./useNavigation");
Object.keys(_useNavigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useNavigation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useNavigation[key];
    }
  });
});
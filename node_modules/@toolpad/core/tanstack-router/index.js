"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TanStackRouterAppProvider = require("./TanStackRouterAppProvider");
Object.keys(_TanStackRouterAppProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TanStackRouterAppProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TanStackRouterAppProvider[key];
    }
  });
});
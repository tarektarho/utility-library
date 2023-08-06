"use strict";
// array
//Todo
// export { first } from './array/first';
// export { insertAt } from './array/insertAt';
// export { last } from './array/last';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUtility = exports.updateTimer = exports.deepEquals = exports.isNil = void 0;
// object
//Todo
// export { removeKeys } from './object/removeKeys';
// value
var isNil_1 = require("./value/isNil");
Object.defineProperty(exports, "isNil", { enumerable: true, get: function () { return isNil_1.isNil; } });
var deepEquals_1 = require("./value/deepEquals");
Object.defineProperty(exports, "deepEquals", { enumerable: true, get: function () { return deepEquals_1.deepEquals; } });
//Todo
//export { isEmpty } from './value/isEmpty';
// export { isNilOrEmpty } from './value/isNilOrEmpty';
// helper
var updateTimer_1 = require("./helper/updateTimer");
Object.defineProperty(exports, "updateTimer", { enumerable: true, get: function () { return updateTimer_1.updateTimer; } });
var promise_1 = require("./helper/promise");
Object.defineProperty(exports, "PromiseUtility", { enumerable: true, get: function () { return promise_1.PromiseUtility; } });

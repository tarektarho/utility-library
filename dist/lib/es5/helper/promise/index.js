"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUtility = void 0;
/**
 * Utility class for working with promises.
 */
var PromiseUtility = /** @class */ (function () {
    function PromiseUtility() {
    }
    /**
     * Returns a promise that resolves to an array of values when all input promises have resolved.
     *
     * @template T - The type of values that the input promises will resolve to.
     * @param {Promise<T>[]} promises - An array of promises to be resolved.
     * @returns {Promise<T[]>} - A promise that resolves to an array of values of type T[].
     *
     * @example
     * const promises = [Promise.resolve(2), Promise.resolve('resolve')];
     * promiseAll(promises).then(console.log);
     */
    PromiseUtility.prototype.promiseAll = function (promises) {
        var outputs = [];
        var settledPromiseCounter = 0;
        return new Promise(function (resolve, reject) {
            promises.forEach(function (promise, index) {
                promise
                    .then(function (value) {
                    outputs[index] = value;
                    settledPromiseCounter++;
                    if (settledPromiseCounter === promises.length) {
                        resolve(outputs);
                    }
                })
                    .catch(function (error) {
                    // Handle the rejected promise here
                    reject(error);
                });
            });
        });
    };
    return PromiseUtility;
}());
exports.PromiseUtility = PromiseUtility;

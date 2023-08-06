/**
 * Utility class for working with promises.
 */
export declare class PromiseUtility {
    constructor();
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
    promiseAll<T>(promises: Promise<T>[]): Promise<T[]>;
}

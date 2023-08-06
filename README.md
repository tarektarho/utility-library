# Utility Library

A collection of TypeScript utility functions for common tasks.

## Installation

You can install the `utility-library` using npm:

```bash
npm install utility-library
```

## Usage

Import and use the utility functions in your TypeScript projects:

```typescript
import { deepEquals, updateTimer /* other utility functions */ } from "utility-library"

// Example usage of deepEquals function
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 2, a: 1 }
const areEqual = deepEquals(obj1, obj2)
console.log(areEqual) // true

// Example usage of updateTimer function
const isoDate = "2023-10-05T14:48:00.000Z"
const timerInfo = { hours: 5, minutes: 30, seconds: 30 }
const updatedTime = updateTimer(isoDate, timerInfo)
console.log(updatedTime) // { hours: 20, minutes: 18, seconds: 30 }
```

## Available Functions

- `deepEquals(valueOne: any, valueTwo: any): boolean`: Compare two values deeply and return `true` if they are equal.

- `updateTimer(isoDate: string, timerInfo: { hours: number, minutes: number, seconds: number }): { hours: number, minutes: number, seconds: number }`: Update a given ISO date based on the timer info and return the updated time.

<!-- Add documentation for other utility functions here -->

## Scripts

- `npm run compile`: Lint and compile the TypeScript source code.

- `npm run lint`: Run ESLint to lint the TypeScript code.

- `npm test`: Run Jest tests.

- `npm run test:coverage`: Run Jest tests with coverage reporting.

- `npm run test:coveralls`: Run Jest tests and report coverage to Coveralls.

## Contributing

Contributions are welcome! If you have any utility functions that you'd like to add, improvements to existing functions, or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author:** Tarek Tarho

**Repository:** [https://github.com/tarektarho/utility-library](https://github.com/tarektarho/utility-library)

**Issues:** [https://github.com/tarektarho/utility-library/issues](https://github.com/tarektarho/utility-library/issues)

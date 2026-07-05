# JavaScript Math

## Working with the Number Data Type

**Definition** — JavaScript's Number type includes integers, floating-point numbers, `Infinity`, and `NaN`. Floating-point numbers are numbers with a decimal point. Positive `Infinity` is a number greater than any other number, while `-Infinity` is a number smaller than any other number. `NaN` (Not a Number) represents an invalid numeric value like the string `"Jessica"`.

## Common Arithmetic Operations

| Operator | Symbol | Description |
|----------|--------|-------------|
| Addition | `+` | Calculates the sum of two or more numbers |
| Subtraction | `-` | Calculates the difference between two numbers |
| Multiplication | `*` | Calculates the product of two or more numbers |
| Division | `/` | Calculates the quotient between two numbers |
| Remainder | `%` | Returns the remainder of a division |
| Exponentiation | `**` | Raises one number to the power of another |

> **Division By Zero** — If you try to divide by zero, JavaScript will return `Infinity`.

## Calculations with Numbers and Strings

When you use the `+` operator with a number and a string, JavaScript will coerce the number into a string and concatenate the two values. When you use the `-`, `*`, or `/` operators with a string and a number, JavaScript will coerce the string into a number and the result will be a number. For `null` and `undefined`, JavaScript treats `null` as `0` and `undefined` as `NaN` in mathematical operations.

```javascript
const result = 5 + '10';
console.log(result);        // "510"
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult);        // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult);        // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult);        // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1);        // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2);        // NaN
console.log(typeof result2); // number
```

## Operator Precedence

**Definition** — Operator precedence determines the order in which operations are evaluated in an expression. Operators with higher precedence are evaluated before those with lower precedence. Values inside parentheses will be evaluated first, and multiplication/division will have higher precedence than addition/subtraction. If the operators have the same precedence, then JavaScript will use associativity.

```javascript
const result = (2 + 3) * 4;
console.log(result);  // 20

const result2 = 10 - 2 + 3;
console.log(result2); // 11

const result3 = 2 ** 3 ** 2;
console.log(result3); // 512
```

**Associativity** — Associativity informs us the direction in which an expression is evaluated when multiple operators of the same type exist. It defines whether the expression should be evaluated from left-to-right (left-associative) or right-to-left (right-associative). For example, the exponent operator is right-to-left associative.

```javascript
const result4 = 5 ** 4 ** 1;
console.log(result4); // 625
```

## Increment and Decrement Operators

**Increment Operator (`++`)** — Used to increase the value by one. The prefix notation `++num` increases the value of the variable first, then returns the new value. The postfix notation `num++` returns the current value first, then increases it.

```javascript
let x = 5;
console.log(++x); // 6
console.log(x);   // 6

let y = 5;
console.log(y++); // 5
console.log(y);   // 6
```

**Decrement Operator (`--`)** — Used to decrease the value by one. The prefix and postfix notations work the same way as the increment operator.

```javascript
let num = 5;
console.log(--num); // 4
console.log(num--); // 4
console.log(num);   // 3
```

## Compound Assignment Operators

| Operator | Description |
|----------|-------------|
| `+=` | Performs addition and assigns the result to the variable |
| `-=` | Performs subtraction and assigns the result to the variable |
| `*=` | Performs multiplication and assigns the result to the variable |
| `/=` | Performs division and assigns the result to the variable |
| `%=` | Divides and assigns the remainder to the variable |
| `**=` | Raises to a power and assigns the result to the variable |

## Booleans and Equality

**Boolean** — A data type that can only have two values: `true` or `false`.

**Equality (`==`) Operator** — Uses type coercion before checking if the values are equal.

```javascript
console.log(5 == '5'); // true
```

**Strict Equality (`===`) Operator** — Does not perform type coercion and checks if both the types and values are equal.

```javascript
console.log(5 === '5'); // false
```

**Inequality (`!=`) Operator** — Uses type coercion before checking if the values are not equal.

**Strict Inequality (`!==`) Operator** — Does not perform type coercion and checks if both the types and values are not equal.

## Comparison Operators

| Operator | Description |
|----------|-------------|
| `>` | Checks if the left value is greater than the right |
| `>=` | Checks if the left value is greater than or equal to the right |
| `<` | Checks if the left value is less than the right |
| `<=` | Checks if the left value is less than or equal to the right |

## Unary Operators

**Unary Plus (`+`) Operator** — Converts its operand into a number. If the operand is already a number, it remains unchanged.

```javascript
const str = '42';
const num = +str;
console.log(num);        // 42
console.log(typeof num); // number
```

**Unary Negation (`-`) Operator** — Negates the operand.

```javascript
const num = 4;
console.log(-num); // -4
```

**Logical NOT (`!`) Operator** — Flips the boolean value of its operand. If the operand is `true`, it becomes `false`, and vice versa.

## Bitwise Operators

| Operator | Symbol | Description |
|----------|--------|-------------|
| Bitwise AND | `&` | Returns `1` in each bit position where both operands have a `1` |
| Bitwise AND Assignment | `&=` | Performs bitwise AND and reassigns the result |
| Bitwise OR | `\|` | Returns `1` in each bit position where either or both operands have a `1` |
| Bitwise OR Assignment | `\|=` | Performs bitwise OR and reassigns the result |
| Bitwise XOR | `^` | Returns `1` where either, but not both, operands have a `1` |
| Bitwise NOT | `~` | Inverts the binary representation of a number |
| Left Shift | `<<` | Shifts all bits to the left by a specified number of positions |
| Right Shift | `>>` | Shifts all bits to the right |

## Conditional Statements, Truthy & Falsy Values, and the Ternary Operator

**`if` / `else if` / `else`** — An `if` statement takes a condition and runs a block of code if that condition is truthy. If the condition is false, it moves to the `else if` block. If none of those conditions are true, it will execute the `else` clause.

- **Truthy values** — Any values that result in `true` when evaluated in a Boolean context like an `if` statement.
- **Falsy values** — Values that evaluate to `false` in a Boolean context.

```javascript
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B'); // You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed! You need to study more!');
}
```

**Ternary Operator** — Often used as a shorter way to write `if...else` statements.

```javascript
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`); // It's a sunny day!
```

## Binary Logical Operators

**Logical AND (`&&`) Operator** — Checks if both operands are true. If both are true, it returns the second value. If either operand is falsy, it returns the falsy value. If both are falsy, it returns the first falsy value.

```javascript
const result = true && 'hello';
console.log(result); // hello
```

**Logical OR (`||`) Operator** — Checks if at least one of the operands is truthy.

**Nullish Coalescing (`??`) Operator** — Returns a value only if the first one is `null` or `undefined`.

```javascript
const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

## The Math Object

| Method | Description |
|--------|-------------|
| `Math.random()` | Generates a random floating-point number between 0 (inclusive) and 1 (exclusive) |
| `Math.max()` | Takes a set of numbers and returns the maximum value |
| `Math.min()` | Takes a set of numbers and returns the minimum value |
| `Math.ceil()` | Rounds a value up to the nearest whole integer |
| `Math.floor()` | Rounds a value down to the nearest whole integer |
| `Math.trunc()` | Removes the decimal part of a number without rounding |
| `Math.sqrt()` | Returns the square root of a number |
| `Math.cbrt()` | Returns the cube root of a number |
| `Math.abs()` | Returns the absolute value of a number |
| `Math.pow()` | Raises the first number to the power of the second |

**`Math.round()`** — Rounds a value to the nearest whole integer.

```javascript
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

## Common Number Methods

**`isNaN()`** — `NaN` stands for "Not-a-Number". It's a special value that represents an unrepresentable or undefined numerical result. The `isNaN()` function property is used to determine whether a value is `NaN` or not. `Number.isNaN()` provides a more reliable way to check for `NaN` values, especially in cases where type coercion might lead to unexpected results with the global `isNaN()`.

```javascript
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
```

**`parseFloat()`** — Parses a string argument and returns a floating-point number. It's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters later on.

**`parseInt()`** — Parses a string argument and returns an integer. `parseInt()` stops parsing at the first non-digit it encounters. For floating-point numbers, it returns only the integer part. If it can't find a valid integer at the start of the string, it returns `NaN`.

**`toFixed()`** — Called on a number and takes one optional argument: the number of digits to appear after the decimal point. It returns a string representation of the number with the specified number of decimal places.
# Questions 

## 1- What is the Generic Function in Typescript?
### Ans - A generic function is a function that uses type parameters to work with any data type, while preserving type safety.

### Formal Definition

### A generic function allows the caller to specify or infer the type of data it operates on, making the function reusable for multiple types without losing compile-time type checking.

``` 
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);      // number
identity<string>("hello"); // string

```
## 2- What is "AS CONST" in Typescript ?
### Ans - 

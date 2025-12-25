# typescript
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init

Run 
npx ts-node index.ts

1) TypeScript Basics (Beginner)

What you learn
Types, inference
Functions
Arrays, tuples
Objects

**TL;DR**
Below is a **from-scratch → pro** TypeScript roadmap with **hands-on projects**. You’ll build real things at every step, not just read theory.

---

## 0) Setup (15 minutes)

**Goal:** Be ready to write TS.

```bash
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
```

Run:

```bash
npx ts-node index.ts
```

---

## 1) TypeScript Basics (Beginner)

**What you learn**

* Types, inference
* Functions
* Arrays, tuples
* Objects

### Example: Typed Calculator

```ts
// index.ts
type Operation = "add" | "sub" | "mul" | "div";

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case "add": return a + b;
    case "sub": return a - b;
    case "mul": return a * b;
    case "div": return a / b;
  }
}

console.log(calculate(10, 5, "mul"));
```

**Key idea:** TS catches invalid inputs **before runtime**.

---

## 2) Objects, Interfaces & Types

**What you learn**

* `interface` vs `type`
* Optional & readonly fields

### Example: User Model

```ts
interface User {
  readonly id: string;
  name: string;
  email?: string;
}

const user: User = {
  id: "u1",
  name: "Alice",
};
```

---

## 3) Enums & Literal Types

**What you learn**

* Safer constants

```ts
enum Role {
  ADMIN = "admin",
  USER = "user",
}

function checkRole(role: Role) {
  if (role === Role.ADMIN) {
    console.log("Admin access");
  }
}
```

---

## 4) Functions Like a Pro

**What you learn**

* Return types
* Optional params
* Function overloads

```ts
function format(value: number): string;
function format(value: string): string;
function format(value: number | string): string {
  return `Value: ${value}`;
}
```

---

## 5) Generics (Intermediate 🔥)

**What you learn**

* Reusable, type-safe code

### Example: Generic API Response

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const response: ApiResponse<number[]> = {
  data: [1, 2, 3],
};
```

---

## 6) Classes & OOP

**What you learn**

* Access modifiers
* Abstract classes
* Implements

```ts
abstract class Vehicle {
  constructor(protected speed: number) {}
  abstract move(): void;
}

class Car extends Vehicle {
  move() {
    console.log(`Driving at ${this.speed} km/h`);
  }
}
```

---

## 7) Advanced Types (Pro Level)

**What you learn**

* Union & intersection
* `keyof`, `typeof`
* Utility types

```ts
type UserDTO = Pick<User, "id" | "name">;
type PartialUser = Partial<User>;
```

---

## 8) Error Handling & Type Guards

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

---

## 9) Real Project #1 – CLI Todo App

**Skills**

* Types
* Interfaces
* File I/O

```ts
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
```

Features:

* Add todo
* List todos
* Mark completed

---

## 10) Real Project #2 – Typed REST API (Node + Express)

**Skills**

* DTOs
* Request typing
* Middleware types

```ts
interface CreateUserDTO {
  name: string;
  email: string;
}
```

---

## 11) Frontend TypeScript (React)

**Skills**

* Props typing
* Hooks
* Component generics

```ts
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);
```


---

## Learning Path Summary

**Beginner**

* Types, functions, objects
  **Intermediate**
* Generics, classes, enums
  **Advanced**
* Utility types, type guards, architecture

---



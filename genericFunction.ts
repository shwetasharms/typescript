

// ## 1) Problem Without Generics


function identity1(value: any): any {
  return value;
}


// ❌ Loses type safety.


// ## 2) Generic Function (Core Idea)


function identity<T>(value: T): T {
  return value;
}



// ```ts
// identity<number>(10);
// identity("hello"); // inferred as string
// ```


// ## 3) Multiple Generic Types


function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair(1, "a"); // [number, string]


// ## 4) Generic With Arrays

function firstItem<T>(items: T[]): T {
  return items[0];
}

firstItem([1, 2, 3]);       // number
firstItem(["a", "b"]);     // string


// ## 5) Generic Constraints (`extends`)



// ## 7) Generic Arrow Function

const wrap = <T>(value: T): { value: T } => {
  return { value };
};




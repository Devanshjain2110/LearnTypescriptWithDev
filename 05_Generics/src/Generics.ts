const score: Array<number> = [];
const value: Array<String> = [];

function identityOne(val: boolean | number): boolean | number {
  return val; // we can type check for boolean and number in our value
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("3");

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "fire", type: 4 });
// for own datatypes, this is the syntax to be followed

function getSearchProducts<T>(products: T[]): T {
  let index = 3;
  return products[index];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const index = 4;
  return products[index];
};

// using type parameters in generic constraints

function aFunction<T, U>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}
aFunction(3, "4");

interface Database {
  connection: string;
  username: string;
}

function bFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}
bFunction(2, {connection:"Fire", username: "Tire"})

interface quiz{
    name: string,
    type : string
}

interface Course {
    name : string,
    author : string,
    subject : string 
}

class Sellable<T>{
    public cart : T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
} 
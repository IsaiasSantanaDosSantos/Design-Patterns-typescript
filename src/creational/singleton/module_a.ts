import { MyDatabaseFuncition } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFuncition;
myDatabaseClassic.add({ name: "Luiz", age: 30 });
myDatabaseClassic.add({ name: "Isaias", age: 40 });
myDatabaseClassic.add({ name: "Kurt", age: 16 });
myDatabaseClassic.show();

export { myDatabaseClassic };

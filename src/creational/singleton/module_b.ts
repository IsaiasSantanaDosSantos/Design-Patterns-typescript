import { MyDatabaseFuncition } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFuncition;
myDatabaseClassic.add({ name: "Roberto", age: 30 });
myDatabaseClassic.add({ name: "Paulo", age: 40 });
myDatabaseClassic.add({ name: "Marcos", age: 16 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);

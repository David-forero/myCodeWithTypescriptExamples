// console.log('hello world!');
// Para copiar este archivo seria: tsc salida.ts
// Si no quieres hacerlo constantemente seria: tsc salida.ts -w (--watch)
export {}; //para quitar los errores en las funciones
//Types
var myString: string = "hello world";
var myNumber: number = 22;
var myBoolean: boolean = false;

//con esto podré cambiar la variable su tipo
var myVar:any = "hello";
myVar = 22;

//Prints
document.write(myString);
document.write(myNumber.toString());

//Arrays
var myArrays: string[] = ["item1", "item2", "item3"];
var myNumbers: number[] = [1, 2, 3];
var myAny: any[] = [1, true, "hello"];

//Tuple (para definir un arreglo)
var myTuple: [string, number];
myTuple = ["hello", 20]

//Functions

//Quiero que los parametros sean tipo numeros y que retorne numeros!
function getSum(num1:number, num2: number): number {
    return num1 + num2;
}

let sumLet = function(num1:number|string, num2:number|string): number {
    if (typeof(num1) === "string") {
        num1 = parseFloat(num1);
    }
    if (typeof(num2) === 'string') {
        num2 = parseFloat(num2);
    }
    return num1 + num2;
}

//getName lastname le puse como paramentro opcional
function getName(firstname:string, lastname?: string): string {
    return `${firstname} ${lastname}`;
}

//interfaces
interface IshowTodo {
    title: string,
    text: string
}

function showTodo(todo: IshowTodo) {
    console.log(`${todo.title} - ${todo.text}`);
}

showTodo({
    title:"Run",
    text: "I have to run in the morming"
})
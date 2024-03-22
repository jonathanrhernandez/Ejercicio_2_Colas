/* 1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */

console.log("Ejercicio 1 colas");

let colaOriginal= [ "amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]
let colaNon =[];
let colaPar = [];

function dividirColas(cola){
    for (let index = 0; index < cola.length; index++) {
        if((index +1) % 2 == 0)
            colaPar.push(cola[index]);
        else
        colaNon.push(cola[index]);
    }
}

dividirColas(colaOriginal);

console.log("Cola original: ", JSON.stringify(colaOriginal));
console.log("Cola 1 Nones: ", JSON.stringify(colaNon));
console.log("Cola 2 Pares: ", JSON.stringify(colaPar));

/* 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira. */

console.log("Ejercicio 2 colas");

let cola = [ 
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true }
];

console.log("Cola inicial: ", cola);

let retirados = [];
let colaFinal = [];

for (let index = 0; index < cola.length; index++) {
    if(!cola[index].ticket)
    retirados.push(cola[index]);   
else
colaFinal.push(cola[index]);    
}
console.log("Colados que fueron retirados: ", retirados);
console.log("Cola final, quitando a los colados: ", colaFinal);
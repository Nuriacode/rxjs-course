import { of } from 'rxjs';

/**
 * of: es una función que nos permite crear observables en base a un listado de elementos.
 * Convierte el argumento en un secuencia de valores que va a ser emitidos por el observable. De manear síncrona.
 * 
 */

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, Promise.resolve(true));


console.log('Inicio del obs')
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
)
console.log('Fin del obs')
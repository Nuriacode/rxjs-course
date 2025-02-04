import { range, of, asyncScheduler  } from 'rxjs';

/**
 * range: crea un observable que emite una secuencia de número en base a un rango.

 */

const src$ = range(1,5, asyncScheduler);

console.log('inicio')
src$.subscribe(console.log)
console.log('fin')

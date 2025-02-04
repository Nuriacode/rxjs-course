import { interval, timer } from 'rxjs';

/**
 * Interval: crea un observable que emite una secuencia de números en un intervalo de tiempo determinado.
 * 
 */

/**
 * Timer: es muy parecido al Interval. Crear un observable después de una fecha específica. Luego de ese valor emite valores en un tiempo indicado.
 * 
 */

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds (hoyEn5.getSeconds() + 5)

const interval$ = interval(1000);
// const timer$ = timer(2000)
// const timer$ = timer(2000, 1000)
const timer$ = timer( hoyEn5)



console.log('Inicio')
// interval$.subscribe(observer);
timer$.subscribe(observer)
console.log('Fin')

import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
 next: value => console.log('next: ', value),
 error: error => console.warn('obs: ', error),
 complete: () => console.info('completado: ') 
}


const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval( 
        () => subs.next( Math.random() ), 1000
    );

    return () => {
        clearInterval( intervalID )
        console.log('Intervalo destruido')
    }
    
});

/**
 * 1 - Casteo múltiple. 
 * 2 - También es un observer.
 * 3 - Next, error y complete.
 */

/**
 * Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observalbe".
 * Pero cuando la data es producida FUERA del observable es llamada "Hot Observable".
 * Un subject nos permite transfomar un Cold Observable en un Hot Observable.
 */


const subject$ = new Subject(); 
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) )
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) )

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )

setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500)
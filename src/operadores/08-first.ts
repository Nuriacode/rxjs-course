import { first, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>( document, 'click' );



click$.pipe(
    tap<PointerEvent>( ()=> console.log('tap')),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // })),
    map( ({clientX, clientY}) => ({ clientY: clientY, clientX: clientX })),  
    first(event => event.clientY >= 150)
)
.subscribe( {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
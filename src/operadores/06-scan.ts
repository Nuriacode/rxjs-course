import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur

// Reduce
from( numeros ).pipe(
    reduce ( totalAcumulador, 0)
)
.subscribe(console.log)

// Scan
from( numeros ).pipe(
    scan( totalAcumulador, 0)
)
.subscribe( console.log )

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'abc' },
    { id: 'fher', autenticado: true, token: 'abc123' },
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc: Usuario, curr: Usuario) => {
        return { ...acc as Object, ...curr }
    }, {edad: 33} )
);

const id$ = state$.pipe(
    map( state => state)
)

id$.subscribe(console.log)
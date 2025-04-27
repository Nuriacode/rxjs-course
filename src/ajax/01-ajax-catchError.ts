import { catchError, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'



const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response ) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message );
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( manejaErrores )
//     .then( response => response.json() )
//     .then( data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuario', err))

// fetchPromesa
//     .then( manejaErrores )
//     .then( response => response.json() )
//     .then( data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuario', err))

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios:', users) );
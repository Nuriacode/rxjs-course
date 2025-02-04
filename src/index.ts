import { asyncScheduler } from 'rxjs';

/**
 * asyncScheduler: no crea un observable, crea una subscripción. (.subscribe)
 * 
 */

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);


// asyncScheduler.schedule( saludar, 2000 );
asyncScheduler.schedule( saludar, 2000 );

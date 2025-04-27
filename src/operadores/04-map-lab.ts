import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum ornare felis ut eleifend. Nam est mauris, placerat eget dignissim vel, tristique sit amet massa. Nullam efficitur consectetur risus, vel pretium nibh euismod sit amet. Quisque elementum lobortis massa ut placerat. Sed eget nisi laoreet, pharetra elit nec, ullamcorper ante. Curabitur vehicula interdum velit, ut molestie nibh tempus a. Sed congue enim enim, et luctus enim consectetur ac. In hac habitasse platea dictumst. Ut massa metus, semper nec nulla vel, luctus ultrices nisi. Integer mattis fermentum dolor eget mollis.
<br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur enim erat, iaculis ullamcorper lectus ac, efficitur elementum metus. Aliquam blandit rhoncus lorem, et aliquet felis. Mauris tempus lacus ac ligula vehicula, ac consequat libero aliquet. Vivamus condimentum neque maximus lacus commodo varius. Nulla lacinia nunc odio, in finibus sapien consequat quis. Etiam metus nisl, pharetra ut eleifend id, feugiat vel tellus. Fusce rutrum quis leo ut laoreet. Sed porta volutpat nulla sit amet lobortis. Nulla pretium augue magna, laoreet mollis arcu efficitur eu. Cras tincidunt rutrum aliquet. Curabitur rhoncus ac risus non malesuada. Quisque mollis eu tortor quis pulvinar.
<br/><br/>
Nam augue lacus, tempor sed urna eu, placerat consequat purus. Integer molestie vulputate maximus. Integer et bibendum tortor. Aliquam et lectus eu ante semper interdum id hendrerit neque. Nulla eu purus in dolor placerat varius non ut ex. Cras eget feugiat ipsum. Suspendisse sem justo, convallis nec pulvinar vitae, finibus ut risus. Suspendisse ornare auctor felis sit amet aliquet. Integer quis condimentum dui. Maecenas euismod urna arcu, sed imperdiet nisi ornare fermentum. Praesent vitae egestas leo. In pulvinar bibendum nulla eu suscipit. Maecenas sed congue lectus.
<br/><br/>
Nulla finibus metus sed massa molestie faucibus. Sed feugiat velit nec nunc fermentum, id varius magna auctor. Suspendisse et nisi tincidunt, suscipit arcu at, commodo eros. Fusce dictum placerat facilisis. Integer in vehicula risus, a lacinia urna. Fusce eleifend rutrum sapien quis sollicitudin. Integer placerat cursus sem, sit amet lobortis dui dictum et. Ut nec varius leo, in imperdiet tortor. Fusce at enim augue. Morbi lorem nunc, congue eu felis a, ullamcorper lacinia lacus. Quisque lorem ex, sollicitudin congue tellus nec, congue feugiat tortor. Proin mollis mattis ante et vehicula. Aliquam vestibulum mattis eros at placerat.
<br/><br/>
Vivamus ac varius leo. Etiam purus ante, viverra eu feugiat tempor, consequat sit amet neque. Vivamus eget tristique lacus. Maecenas ut ligula at risus fringilla bibendum sit amet sed orci. Morbi tortor odio, interdum ut dui nec, tempor cursus felis. Pellentesque luctus tincidunt mi ut varius. Vivamus ornare vestibulum elit, sit amet fringilla tellus eleifend eu. Aliquam tincidunt ultricies mi, quis feugiat leo suscipit sit amet. Ut ut tincidunt neque, et porttitor nulla.
`;

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

//funcion que haga el cálculo
const calcularPorcentajeScroll = (event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100
}

//streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)


const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})
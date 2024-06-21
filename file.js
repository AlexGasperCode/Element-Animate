const $pelota = document.getElementById('pelota');
// element.animate(keyframes = [], option = {})
$pelota.animate([
    // from
    {
        transform: 'translateX(0)'
    },
    // to
    {
        transform: 'translateX(500px)'
    }
], {
    duration: 1000,
    delay: 1000,
    direction: 'reverse',
    easing: 'linear',
    interations: Infinity,
    // Que se quede los estilos al finales
    fill: 'forwards',
    // Que empiece cierta parte,que sea controlable en cierto estado de la animaciòn
    iterationStart: .5,
    /*= 50%*/
    // Animaciòn en cadena y pausas entre ellas
    // endDelay: 5000,

})
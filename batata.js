let tela;
let contexto;
let proximox;
let proximoy;
window.onload = function () {
    tela = document.getElementById("canvas");
    contesto = tela.getContext("2D");
    document.addEventListener("keydown", keyDownEvent);
    let fps = 8;

    setInterval(desenharJogo, 1000 / fps);

}
function keyDownEvent(event) {
    switch (event.keycode) {
        case 37:
            proximox = -1;
            proximoy = 0;

            break;
        case 38:
            proximox = o;
            proximoy = -1;
            break;
        case 39:
            proximox = 1;
            proximoy = 0;
            break;
        case 40:
            proximox = 0;
            proximoy = 1;


            break;
    }
}



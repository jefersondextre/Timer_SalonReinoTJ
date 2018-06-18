let view_clock = document.getElementById('view_clock');

let form = document.getElementById('form');
let iframe = document.getElementById('iframe-form');
let messages = document.getElementById('messages');
let reiniciarclock= document.getElementById('clearinput');

let button1 = document.getElementById('animar');
let button2 = document.getElementById('cerrar');

let enviar = document.getElementById('enviar')
let reiniciar = document.getElementById('reiniciar');
let zoom = document.getElementById('sizefont');

// ------------------------------

let cronometro;
let segundo = 0 + "0";
let minuto = 0 + "0";
let hora = 0 + "0";
function tempo() {
        if (segundo < 59) {
          segundo++
          if (segundo < 10) {
            segundo = "0" + segundo
          }
        } else
        if (segundo == 59 && minuto < 59) {
          segundo = 0 + "0";
          minuto++;
          if (minuto < 10) {
            minuto = "0" + minuto
          }
        }
        if (minuto == 59 && segundo == 59 && hora < 23) {
          segundo = 0 + "0";
          minuto = 0 + "0";
          hora++;
          if (hora < 10) {
            hora = "0" + hora
          }
        } else
        if (minuto == 59 && segundo == 59 && hora == 23) {
          segundo = 0 + "0";
          minuto = 0 + "0";
          hora = 0 + "0";
        }

          form.cronometro.value = hora + ":" + minuto + ":" + segundo;
          iframe.cronometro.value = hora + ":" + minuto + ":" + segundo;
          
}

// reiniciar.addEventListener('click',cleartempo());

//FUNCION VACIA:
reiniciarclock.addEventListener('click',function(){
        location.reload(true)
        
})
   
button1.addEventListener('click', function () {
        messages.classList.add('anuncio');
});
button2.addEventListener('click', function () {
        messages.classList.remove('anuncio');
});
let setmessages = function () {
        let contenido = document.getElementById('contenido_text').value;
        let v = `<h1>${contenido}</h1>`
        messages.innerHTML = v;
        // iframe.textContent = v;
}

button1 = addEventListener('click', function () {
                setmessages();
})

// ======================================

let changeSize = e => 
  document.documentElement.style.setProperty('--size', e.target.value++)


zoom.addEventListener('change', e => changeSize(e));
// zoom.addEventListener('mousemove', e => changeSize(e));
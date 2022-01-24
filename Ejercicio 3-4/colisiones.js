var posicionX = 50;
var posicionY = 45;

var botonIzquierda;
var botonDerecha;
var botonArriba;
var botonAbajo;

function iniciar(){
	botonIzquierda = document.getElementById('left');
	botonDerecha = document.getElementById('right');
	botonArriba = document.getElementById('top');
	botonAbajo = document.getElementById('bottom');

	botonIzquierda.addEventListener('click', animar);
	botonDerecha.addEventListener('click', animar);
	botonArriba.addEventListener('click', animar);
	botonAbajo.addEventListener('click', animar);
}

function animar(){
	var valor = document.getElementById('mov').value;
	var cubo = document.querySelector('.block');
    var razon = (valor*5)/1000;
    var tiempo = 0;
    var boton = this;


    var intervalo = setInterval(mover, 5);

    function mover(){
        if(boton == botonIzquierda){
            tiempo++;
            posicionX -= razon;
            cubo.style.left = posicionX + 'px';
            if(tiempo == 200){
                clearInterval(intervalo);
            }
        }

        if(boton == botonDerecha){
            tiempo++;
            posicionX += razon;
            cubo.style.left = posicionX + 'px';
            if(tiempo == 200){
                clearInterval(intervalo);
            }
        }

        if(boton == botonArriba){
            tiempo++;
            posicionY -= razon;
            cubo.style.top = posicionY + 'px';
            if(tiempo == 200){
                clearInterval(intervalo);
            }
        }

        if(boton == botonAbajo){
            tiempo++;
            posicionY += razon;
            cubo.style.top = posicionY + 'px';
            if(tiempo == 200){
                clearInterval(intervalo);
            }
        }        
    }	
}

document.addEventListener("DOMContentLoaded", iniciar);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(1, 10);
var cantidad1 = aleatorio(1, 10);
var cantidad2 = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    vaca.cargaOK = true;
    dibujar();
}

/*var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);
*/
/*mover a un cerdo con el teclado
    Debemos agregar la imagen en el evento load del objeto.
    Debemos usar el método .drawImage del canvas para insertar la imagen.
    Canvas dibuja siempre encima del último objeto.*/
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v<cantidad; v++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x*80;
            var y = y*80;

            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        for(var v=0; v<cantidad1; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x*70;
            var y = y*70;

            papel.drawImage(cerdo.imagen, x, y);
        } 
    }
    if(pollo.cargaOK)
    {
        for(var v=0; v<cantidad2; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x*60;
            var y = y*60;

            papel.drawImage(pollo.imagen, x, y);
        } 
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

TabNine::config

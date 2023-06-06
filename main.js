function generarGato (){
 let imagen = document.createElement("img"); 
 let contenedor = document.getElementById("contenedor");
 imagen.src = "gatito.jpg"  
 contenedor.appendChild(imagen);
}
/*Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462) */



const prompt = require('prompt-sync')();

let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
console.log("Tu peso en libras es:", pesoKg * 2.20462);
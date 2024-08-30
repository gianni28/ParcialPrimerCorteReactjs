function palabraMasLarga(array) {
    // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
    // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
    // Por ej:
    // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
  
    // Tu código aca:
    let palabraLarga = "";

    for (let i = 0; i < array.length; i++) {
        let palabras = array[i].split(' ');

        for (let l = 0; l < palabras.length; l++) {

            if (palabras[l].length > palabraLarga.length) {
                palabraLarga = palabras[l];
            }
        }
    }

    return palabraLarga;
}

console.log(palabraMasLarga(['hola esto string', 'frase con palabra']));
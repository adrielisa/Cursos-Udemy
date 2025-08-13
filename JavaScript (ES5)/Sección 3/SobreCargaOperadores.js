//A partir de EM6 ya podemos poner los valores

function crearProducto(nombre, precio = "∞"){
    nombre = nombre || "Sin nombre"
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precios: ", precio)
}


crearProducto("Novia")
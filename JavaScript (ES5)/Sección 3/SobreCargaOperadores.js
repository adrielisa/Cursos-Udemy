function crearProducto(nombre, precio = "∞"){
    nombre = nombre || "Sin nombre"
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precios: ", precio)
}


crearProducto("Novia")
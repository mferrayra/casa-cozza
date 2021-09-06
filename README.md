# Coder 
Martin Ferrayra - camada-16930-rj-online

# Desafío 1
Creación de una app react; código fuente con versión en GitHub.

# Desafío 2
Creación de un componente navbar (NavVar.js) simple.

# Desafío 3
Muestra un contenedor con algunos articulos de detergentes mocked

# Desafío 4 y 5
Agrego imágenes, refactorizo para utilizar el router con las opciones:
 - Por default muestra todos los productos
 - En cada opcion muestra productos relacionados con la categoria asociada a la opcion
 - En cada producto permite navegar hacia el detalle (DetailContainer - ProductoDetail) con información adicional de stock y simulando poder comprar o seguir buscando (vuelta hacia atras del path que se encontraba)

 # Desafío 6 y 7
 Contexto de cesta + Counter
 - Añade a la cesta cantidades de productos validadas por el contador segun stock
 - Elimina producto seleccionado a comprar en el resumen de compra
 - Vacía la cesta en el resumen de compra

 # Desafío 7 y 8
 Firebase + CartScreen
 - Agrega un spinner e inhabilita el navbar cuando se clickea una opción
 - Conecta con firebase (ojo con la sintaxis; funciona para la versión descargada actual)
 - Filtra por menu como lo hacía cuando estaba mockeado (todos en el barra, y filtra por opción; menos las ofertas destacadas que no está desarrollado)
 - Muestra el CartScreen totalizado por categoria y por todal final; y permite cancelar la compra (vaciar la cesta)
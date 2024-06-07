Hola! Les presento iShop SF 
Por el momento solamente funciona con amor.. jajaja
1 -> Cuando uno ingresa, si no esta logeado lo lleva automaticamente a la pestaña "LOGIN"
No llame a una base de datos de users utilizando fetch para esto, por eso:
2 -> Uno debe crear una cuenta, la cual se almacena en el LOCALSTORAGE.
3 -> Una vez creada la cuenta en "SIGNUP", lo lleva automaticamente a la pestaña "INDEX"
4 -> Aqui mostramos el listado de productos en database, llamandolo con el fetch.
5 -> Cada producto tiene para "sumar" o "restar" una unidad del mismo en el carrito.
(Aqui deberia perfeccionar la pagina con mas tiempo y que en el carrito aparezca el item con la opcion de eliminarlo desde ahi, no desde el listado)
6 -> El carrito enseña el monto con el total y cuando presiona "Realizar compra" se almacena.
Para no utilizar console.log ni alert utilice sweet alert 2.

Cosas a mejorar:
-Styles desde el vamos
-Añadir versatilidad al carrito
-

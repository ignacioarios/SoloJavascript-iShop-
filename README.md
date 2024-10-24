# iShop SF

¡Hola! Les presento **iShop SF**. Por el momento, el sistema funciona con amor... ¡jajaja!

## Funcionalidades

1. **Inicio de Sesión**: 
   - Cuando un usuario ingresa, si no está logueado, es redirigido automáticamente a la pestaña "LOGIN".
   - No se llama a una base de datos de usuarios utilizando `fetch` para este propósito.

2. **Registro de Usuario**: 
   - Los usuarios deben crear una cuenta, la cual se almacena en el `LOCALSTORAGE`.

3. **Redirección Automática**: 
   - Una vez creada la cuenta en "SIGNUP", el usuario es redirigido automáticamente a la pestaña "INDEX".

4. **Listado de Productos**: 
   - En la pestaña "INDEX", se muestra el listado de productos almacenados en la base de datos, que se obtiene mediante `fetch`.

5. **Carrito de Compras**: 
   - Cada producto tiene botones para "sumar" o "restar" unidades en el carrito.
   - Se podría mejorar la página con más tiempo para que el carrito muestre el item con la opción de eliminarlo directamente desde allí, en lugar de hacerlo desde el listado.

6. **Realizar Compra**: 
   - El carrito muestra el monto total y, al presionar "Realizar compra", se almacena la información.
   - Para evitar el uso de `console.log` y `alert`, se utilizó **SweetAlert2** para las notificaciones.

## Cosas a Mejorar

- Mejorar los estilos desde el principio.
- Añadir versatilidad al carrito de compras.

---

¡Espero que disfruten usando **iShop SF**! Si tienes sugerencias o comentarios, no dudes en compartirlos.

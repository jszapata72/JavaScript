/* 
 * Programa: fwbasde/b03_alias.js
 * Objetivo: alias
 *
 */
Ext.onReady(function () {

    /* Alias: Es un nombre corto que le asignamos a nuestro objeto.
     *        Hay que tener mucho cuidado, ya que aqui estamos
     *        perdiendo lo que comentabamos en el codigo anterior;
     *        que la estructura "App.clientes.Factura" nos permite
     *        que no "choquen" dos clases con el mismo nombre. 
     * 
     */
    Ext.define('App.clientes.Factura', {
        alias: 'factura',
        config: {
            subtotal: 0.0,
            iva: 0.0,
            total: 0.0
        }
    });
    var fac = Ext.create('factura')
    console.log(fac.total);


    /**
     * Al declarar otro objeto con el mismo "alias", se pierde el alias anterior.
     * Esto significa que solo vamos a poder crear objetos de la ultima declaración
     * (claro, a taves del alias "factura", podemos seguir creando objetos a partir
     * del nombre completo del objeto).
     * 
     */
    Ext.define('App.proveedores.Factura', {
        alias: 'factura',
        config: {
            subtotal: 1.0,
            iva: 0.1,
            total: 1.1
        }
    });
    var facp = Ext.create('factura')
    console.log(facp.total);
});

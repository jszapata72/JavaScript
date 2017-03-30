/* 
 * Programa:  a01_hola_mundo.js
 * Objetivo:  un simple "hola mundo".
 *
 *
 * 1. Este codigo se ejecuta desde que se carga la pagina
 *    ya que esta definido en el index.html.
 * 
 * 2. El framework "ExtJS" esta disponible tambien ya que
 *    lo cargamos desde el index.html.
 *
 * 3. El framework define una variable (objeto) global
 *    llamado "Ext" desde el cual podemos manipular todo
 *    el framework.
 *
 * 4. El evento "onReady" del objeto "Ext" se ejecuta cuando
 *    se termina de cargar con exito todo el framework. Por 
 *    lo que es normal empezar a ejecutar el codigo de 
 *    nuestra aplicación en este evento.
 *
 * 5. El objeto console es muy usado en javascript para 
 *    "debugear" nuestro codigo. Por lo pronto solo vamos
 *    a usar el metodo "log" de este objeto. Este metodo
 *    muestra en la venta "console" del navegador lo que
 *    necesitemos (la ventana "consola" se activa con F12
 *    en la mayoria de los navegadores).
 *
 * 6. Para no dejar tan "escueto" nuestro primer programa
 *    vamos a usar el objeto "Msg" de "Ext" para mostrar
 *    un pequeño mensaje.
 *
 *      Ext.Msg.alert(titulo, mensaje)
 *
 */
Ext.onReady(function () {
    console.log("Hola Mundo, desde ExtJs");
    Ext.Msg.alert('ExtJS esta funcionando.', 'Hola Mundo');
});

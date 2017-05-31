using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ExtJs.asp
{
    public partial class servidor_d02 : Page
    {
        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            /*
             * Con el objeto Request.Params podemos tener acceso
             * a los parametros que se mandaron.
             *
             * Esto teniendo problemas para que se  muestren los
             * parametros. No se porque a veces si se muestran y
             * a veces no, lo que me ha dado resultado es volver
             * a compilar el proyecto y/o limpiarlo.
             * 
             */
            var p1 = Request.Params["par1"];
            var p2 = Request.Params["par2"];

            var json = @"
            {
	            'success': true,
                'parametros': '<<aqui_p>>',

                'data': [{
		            'id': 'MXN',
		            'describe': 'Pesos Mexicanos'

                },{
		            'id': 'USD',
		            'describe': 'Dolares Americanos'
	            }]
            }
            ";
            //
            // Le agrego uno de los parametros, para comprobar que
            // realmente si estoy recibiendolos.
            //
            json = json.Replace("<<aqui_p>>", p1.ToString());


            // Mando la respuesta
            Response.Clear();
            Response.ContentType = "text/plain";
            Response.Write(json);
            Response.End();
        }
    }
}
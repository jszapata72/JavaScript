using System;
using Newtonsoft.Json;
using System.IO;

namespace ExtJs.asp
{
    public partial class servidor_d04 : System.Web.UI.Page
    {
        Persona p;
        protected class Persona
        {
            public string nombre { get; set; }
            public string apaterno { get; set; }
            public string amaterno { get; set; }
            public string email { get; set; }
            public string alta { get; set; }
        }

        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            string jsonText = "";
            var pb = Page.IsPostBack;

            if (p == null)
            {
                p = new Persona();
                p.nombre = "Juan Antonio";
                p.apaterno = "sandoval";
                p.amaterno = "zapata";
                p.email = "juan.sandoval@maxionsc.com";
                p.alta = "2017-01-20";
            }

            // Analizo comando
            var cmd = Request.Params["cmd"];
            if (cmd == null)
            {
                Response.Clear();
                Response.ContentType = "text/plain";
                Response.Write("ERROR");
                Response.End();
                return;
            }

            if (cmd=="app.cmd.LeeDatosPersona")
            {
                
            }

            if (cmd == "app.cmd.GuardaDatosPersona")
            {
                p = JsonConvert.DeserializeObject<Persona>(Request.Params["rec"]);
            }

            jsonText = JsonConvert.SerializeObject(p, Formatting.Indented);
            Response.Clear();
            Response.ContentType = "text/plain";
            Response.Write(jsonText);
            Response.End();
        }
    }
}
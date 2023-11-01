import axios from 'axios';

export const ennviarSolicitud = async(metodo,url,parametros) =>{
    await axios({method: metodo, url: url, data: parametros }).then(function(respuesta){
      
      var tipo =respuesta.status ? "success" : "error"; 
      console.log("tipo",tipo);
      var msj = respuesta.data;
      //show_alerta(msj,tipo);e
      if(tipo === 'success'){
        //document.getElementById('btnCerrar').click();
        //getList();
      }
    })
    .catch(function(error){
    //   show_alerta('Error en la solcitud','error',error)
     
    })
 }
 const url = 'https://incidencias-fiisi.up.railway.app/api/usuario'
 export const getList = async () => {
    try {
      const respuesta = await axios.get(url,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
        },
      });
      //console.log(respuesta.data);
      return respuesta.data;
      
      
    } catch (error) {
      console.log("errs:",error);
    }
    
  }
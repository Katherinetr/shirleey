/*codigo adjunto a la pagina JAVA*/


var hoy=new Date();					    //reserva espacio 
dia=hoy.getDate();						//Número del dia cuando se registro la respuesta
mes=hoy.getMonth();					    //mes de cuando se mandaron las respuesta
anyo=hoy.getYear();						//año de cuando se envió la respuesta
anyo=hoy.getFullYear();	
alert("Fecha de compra: "+dia+"/"+mes+"/"+anyo);		//muestra en pantalla fecha

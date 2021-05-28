/*Codigo que muestra el rejo en pantalla */

function Ver_Hora(){
	var mihora = new Date();								//se reserva espacio con la palabra new
	var horas = mihora.getHour().toString();				//obtiene las hora actual
	var minutos = mihora.getMinutes().toString();			//se obitnen los minutos actuales
	if (minutos.length == 1) minutos = "0"  + minutos;		//si minutos es igual a 1 se inicializa minutos a 0 y nuevamente se vuelve a incrementar
	var segundos = mihora.getSeconds().toString();			//obtiene los seguntos actuales
	if(segundos.length == 1) segundos = "0" + minutos		//si segundos es igual a 1 se inicializa segundos a 0 y nuevamente se vuelve a incrementar

	document.forms[0].mireloj.value = horas + " : "+minutos+" : "+segundos;			//se imprime en pantalla el reloj
}
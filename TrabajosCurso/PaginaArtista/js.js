/*function Confirmar() {
	confirm("Seguro q quiere enviar")
}*/
function MostrarError() {
	prompt("Esta mal", "Aqui el posible error")
}
function Confirmar(){
		
	var confirm= alertify.confirm('Probando confirm','Confirmar solicitud?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'}); 	
	 
	confirm.set({transition:'slide'});   	
	 
	confirm.set('onok', function(){ //callbak al pulsar botón positivo
	    	alertify.success('Has confirmado');
	});
	 
	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
	    alertify.error('Has Cancelado el dialog');
	});
}
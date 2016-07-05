//alert("hola mundo");
function iniciar(){
	var logueador = document.getElementById('text1').value;
	var paso = document.getElementById('text2').value;



	if(logueador == 'Xsmxxl' && paso == '0000'){
		myWindow = window.open("C:/Users/I-NB/Documents/HTML/Game/login/login.html");
		window.close();
	}else{
		alert("Oops ¡Has introducido una contraseña equivocada!");
	}
	
}
function prueba(){
	alert("prueba");
}
function fecha(){
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    var hh = today.getHours();
    var hm = today.getMinutes();
    if(hh < 12){
    		var momento = 'am';
    }else{
    	
    	var momento = 'pm';
    	
    	hh=hh-12;
    	if(hh<10){
    		hh='0'+hh;
    	}
    }

    if(hm < 10){
    	hm='0'+hm;
    }

    if(dd<10){
        dd='0'+ dd;
    } 
    if(mm<10){
        mm='0'+ mm;
    } 
    var today = 'Panamá '+dd+'/'+mm+'/'+yyyy+' '+hh+':'+hm+ momento;
	
	document.getElementById("fecha").innerHTML= today;
}
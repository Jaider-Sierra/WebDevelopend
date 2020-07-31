var nombreUsuarioSesion = "";
var passwordUsuarioSesion = "";
var correoUsuarioSesion = "";
var fechaNacimientoUsuarioSesion = "";
var ciudadUsuarioSesion = "";

var cantidadUsuarios = 0; 
var numeroUsuario = 0;

var usuarios =  new Array(); 




function ValidarUsuario(){
	var usuario = document.getElementById("usuarioLogin").value;
	var contraseña = document.getElementById("passwordLogin").value;
	var nombre = document.getElementById("NUser");
	if (usuario == "" || contraseña == "") {
		$( "#error" ).html("Digite un usuario o contraseña valida");
	}else {
		if (cantidadUsuarios == 0) {
			$( "#error" ).html("Digite un usuario o contraseña valida 2");
		}else {
			console.log(cantidadUsuarios);
			for (var i = 1; i <= cantidadUsuarios; i++) {
				console.log("entro");
				if (usuario == usuarios[i][0] && contraseña == usuarios[i][1]) {
					nombreUsuarioSesion = usuarios[i][0];
					correoUsuarioSesion = usuarios[i][2];
					fechaNacimientoUsuarioSesion = usuarios[i][3];
					ciudadUsuarioSesion = usuarios[i][4];
					IniciarSesion();
					return;
				}
			}
		}
	}
}

function RegistroUsuario(){
	var dato = new Array();
	dato[0] = document.getElementById("usuarioRegistro").value;
	dato[1] = document.getElementById("passwordRegistro").value;
	dato[2] = document.getElementById("correoRegistro").value;
	dato[3] = document.getElementById("fechaNacimientoRegistro").value;
	dato[4] = document.getElementById("ciudadRegistro").value;
	
	if (dato[0] == "" || dato[1] == "" || dato[2] == "" || dato[3] == "" || dato[4] == "") {
		$( "#error2" ).html("Digite todos los campos");
	}else {
		numeroUsuario++;
		cantidadUsuarios++;	
		console.log(numeroUsuario + " " + cantidadUsuarios);
		usuarios[numeroUsuario] = new Array(5);
		for (var i = 0; i < 6; i++) {
			usuarios[numeroUsuario][i] = dato[i];
			if (i == 5) {
				usuarios[numeroUsuario][i] = numeroUsuario;
			}
		}
		nombreUsuarioSesion = usuarios[numeroUsuario][0];
		correoUsuarioSesion = usuarios[numeroUsuario][2];
		fechaNacimientoUsuarioSesion = usuarios[numeroUsuario][3];
		ciudadUsuarioSesion = usuarios[numeroUsuario][4];
		IniciarSesion();
	}
	
}

function IniciarSesion(){
	document.getElementById("menu").style.display = "block";
	document.getElementById("nav1").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.getElementById("info").style.display = "block";

	document.getElementById("nombreMostrar").innerHTML = nombreUsuarioSesion;
	document.getElementById("correoMostrar").innerHTML = correoUsuarioSesion;
	document.getElementById("fechaNMostrar").innerHTML = fechaNacimientoUsuarioSesion;
	document.getElementById("ciudadMostrar").innerHTML = ciudadUsuarioSesion;
}

function CerrarSesion(){
	nombreUsuarioSesion = "";
	correoUsuarioSesion = "";
	fechaNacimientoUsuarioSesion = "";
	ciudadUsuarioSesion = "";

	document.getElementById("menu").style.display = "none";
	document.getElementById("nav1").style.display = "block";
	document.getElementById("login").style.display = "block";
	document.getElementById("info").style.display = "none";

	document.getElementById("usuarioRegistro").value = "";
	document.getElementById("passwordRegistro").value = "";
	document.getElementById("correoRegistro").value = "";
	document.getElementById("fechaNacimientoRegistro").value = "";
	document.getElementById("ciudadRegistro").value = "";

	document.getElementById("usuarioLogin").value = "";
	document.getElementById("passwordLogin").value = "";
}

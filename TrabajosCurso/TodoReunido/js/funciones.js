var NewUser = "";
var NewPassWord = "";

function ValidarUsuario(){
	var usuario = document.getElementById("usuario").value;
	var contraseña = document.getElementById("password").value;
	if (usuario == "" || contraseña == "") {
		$( "#error" ).html("Digite un usuario o contraseña valida");
	}
	if (usuario == "admin" || contraseña == "admin") {
		window.location.href = "User.html";
		$( "#userNombre" ).html(usuario);
	}
}

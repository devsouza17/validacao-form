$(document).ready(function(){
	// Adicionando evento de "submit" ao formulário
	$("#form").on("submit", validarForm);

	// Adicionando evento de "input" ao campo de e-mail
	$("#campoEmail").on("input", removerErroEmail);

	// Adicionando evento de "input" ao campo de senha
	$("#campoSenha").on("input", removerErroSenha);

	// Adicionando evento de "click" ao ícone de mostrar senha e ao seu texto
	$("#iconeMostrarSenha, #txtMostrarSenha").on("click", mostrarSenha);

	// Função que valida o formulário
	function validarForm(){
		const regexEmail = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{3}$/);

		// Verifica se campo de e-mail não foi preenchido
		if($("#campoEmail").val() === ""){
			$("#campoEmail").addClass("erro");

			$("#msgErroEmail").text("Preenchimento obrigatório");

			return false;
		}

		// Verifica se e-mail informado tem mais de 50 dígitos
		if($("#campoEmail").val().length > 50){
			$("#campoEmail").addClass("erro");

			$("#msgErroEmail").text("Seu e-mail não pode ter mais de 50 dígitos");

			return false;
		}

		// Verifica se e-mail informado é inválido
		if(!regexEmail.test($("#campoEmail").val())){
			$("#campoEmail").addClass("erro");

			$("#msgErroEmail").text("Informe um e-mail válido");

			return false;
		}

		// Verifica se campo de senha não foi preenchido
		if($("#campoSenha").val() === ""){
			$("#campoSenha").addClass("erro");

			$("#msgErroSenha").text("Preenchimento obrigatório");

			return false;
		}

		// Verifica se senha informada tem menos de 8 dígitos OU mais de 50 dígitos
		if($("#campoSenha").val().length < 8 || $("#campoSenha").val().length > 50){
			$("#campoSenha").addClass("erro");

			$("#msgErroSenha").text("Sua senha deve ter entre 8 e 50 dígitos");

			return false;
		}
	}

	// Função que remove as mensagens e formatações referentes ao campo de e-mail
	function removerErroEmail(){
		$(this).removeClass("erro");

		$("#msgErroEmail").text("");
	}

	// Função que remove as mensagens e formatações referentes ao campo de senha
	function removerErroSenha(){
		$(this).removeClass("erro");

		$("#msgErroSenha").text("");
	}

	// Função que mostra e oculta a senha
	function mostrarSenha(){
		// Verifica se campo de senha é do tipo "password"
		if($("#campoSenha").prop("type") === "password"){
			$("#campoSenha").prop("type", "text");

			$("#iconeMostrarSenha").removeClass("bi-circle");
			$("#iconeMostrarSenha").addClass("bi-check-circle-fill");
		}else{
			$("#campoSenha").prop("type", "password");

			$("#iconeMostrarSenha").removeClass("bi-check-circle-fill");
			$("#iconeMostrarSenha").addClass("bi-circle");
		}
	}
});
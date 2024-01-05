$(document).ready(function(){
	// Adicionando evento de "submit" ao formulário
	$("#form").on("submit", validarForm);

	// Adicionando evento de "input" ao campo de e-mail
	$("#campoEmail").on("input", removerErroEmail);

	// Adicionando evento de "input" ao campo de senha
	$("#campoSenha").on("input", removerErroSenha);

	// Adicionando evento de "change" ao campo de mostrar senha
	$("#campoMostrarSenha").on("change", mostrarSenha);

	// Função que valida o formulário
	function validarForm(){
		const regexEmail = new RegExp(/^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z0-9_.]{2,}$/);

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

		// Verifica se e-mail informado é válido
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

		// Verifica se senha informada tem entre 8 e 50 dígitos
		if($("#campoSenha").val().length < 8 || $("#campoSenha").val().length > 50){
			$("#campoSenha").addClass("erro");

			$("#msgErroSenha").text("Sua senha deve ter entre 8 e 50 dígitos");

			return false;
		}
	}

	// Função que remove as formatações e mensagens de erro referentes ao campo de e-mail
	function removerErroEmail(){
		$(this).removeClass("erro");

		$("#msgErroEmail").text("");
	}

	// Função que remove as formatações e mensagens de erro referentes ao campo de senha
	function removerErroSenha(){
		$(this).removeClass("erro");

		$("#msgErroSenha").text("");
	}

	// Função que mostra e oculta a senha
	function mostrarSenha(){
		// Verifica se atributo "type" do campo de senha é igual a "password"
		if($("#campoSenha").prop("type") === "password"){
			$("#campoSenha").prop("type", "text");
		}else{
			$("#campoSenha").prop("type", "password");
		}
	}
});
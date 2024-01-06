<?php 
	$email = $senha = "";

	$msg_erro_email = $msg_erro_senha = "";

	$flag = 0;

	// Verifica se formulário foi submetido por meio do método "GET"
	if(isset($_GET["verificou_form"])){
		// Verifica se e-mail não foi informado
		if(empty($_GET["email"])){
			$msg_erro_email = "Preenchimento obrigatório";

			$flag = 1;
		}else{
			$email = testar_valores($_GET["email"]);

			// Verifica se e-mail informado tem mais de 50 dígitos
			if(strlen($email) > 50){
				$msg_erro_email = "Seu e-mail não pode ter mais de 50 dígitos";

				$flag = 1;
			}
			// Verifica se e-mail informado é inválido
			elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
				$msg_erro_email = "Informe um e-mail válido";

				$flag = 1;
			}
		}

		// Verifica se senha não foi informada
		if(empty($_GET["senha"])){
			$msg_erro_senha = "Preenchimento obrigatório";

			$flag = 1;
		}else{
			$senha = testar_valores($_GET["senha"]);

			// Verifica se senha informada tem menos de 8 dígitos OU mais de 50 dígitos
			if(strlen($senha) < 8 || strlen($senha) > 50){
				$msg_erro_senha = "Sua senha deve ter entre 8 e 50 dígitos";

				$flag = 1;
			}
		}

		// Verifica se tudo deu certo
		if($flag === 0){
			header("Location: sucesso.html");
		}
	}

	// Função que testa os valores passados pelo formulário (verifica se não são dados maliciosos)
	function testar_valores($valor){
		$valor = trim($valor);
		$valor = htmlspecialchars($valor);
		$valor = stripslashes($valor);

		return $valor;
	}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Página que faz a validação de um formulário">
	<meta name="author" content="Vitor Souza">
	<title>Validação de Formulário</title>
	<!-- CSS -->
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/index.css">
	<!-- Favicon -->
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
	<!-- Área do site -->
	<div class="area-site">
		<!-- Cabeçalho -->
		<header class="cabecalho">
			<h1 class="titulo-principal">Validação de Formulário</h1>
		</header>

		<!-- Seção do formulário -->
		<section class="secao-form">
			<header class="cabecalho-sec-form">
				<img src="img/usuario.png" alt="Ícone de usuário" class="img-usuario">
				<h2 class="titulo-sec-form">Faça login</h2>
			</header>
			<form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="GET" id="form">
				<div class="area-campos">
					<label for="campoEmail" class="label">
						E-mail: <span class="campo-obrigatorio">*</span>
					</label>
					<input type="text" name="email" id="campoEmail" class="campo" placeholder="Digite seu e-mail" maxlength="50" required>
					<span class="msg-erro" id="msgErroEmail">
						<?= $msg_erro_email ?>
					</span>
				</div>
				<div class="area-campos">
					<label for="campoSenha" class="label">
						Senha: <span class="campo-obrigatorio">*</span>
					</label>
					<input type="password" name="senha" id="campoSenha" class="campo" placeholder="Digite sua senha" minlength="8" maxlength="50" required>
					<span class="msg-erro" id="msgErroSenha">
						<?= $msg_erro_senha ?>
					</span>
					<div class="area-mostrar-senha">
						<i class="bi bi-circle" id="iconeMostrarSenha"></i>
						<span id="txtMostrarSenha">Mostrar senha</span>
					</div>
				</div>
				<input type="hidden" name="verificou_form">
				<button type="submit" class="btn-submit">
					Enviar <i class="bi bi-box-arrow-in-right"></i>
				</button>
			</form>
		</section>

		<!-- Rodapé -->
		<footer class="rodape">
			<p class="creditos-autor">Desenvolvido por Vitor Souza</p>
			<p class="creditos-img">
				Logo e favicon criados por <a href="https://www.flaticon.com/br/icones-gratis/do-utilizador" title="Ícones de usuário" target="_blank" class="link-creditos-img">Those Icons - Flaticon</a>
			</p>
		</footer>
	</div>

	<!-- JavaScript -->
	<script src="js/jquery-3.7.1.js"></script>
	<script src="js/index.js"></script>

	<?php 
		// Verifica se a mensagem de erro do campo de e-mail foi exibida
		if($msg_erro_email !== ""):
	?>

	<script>
		$("#campoEmail").addClass("erro");
	</script>

	<?php 
		endif;
		// Verifica se a mensagem de erro do campo de senha foi exibida
		if($msg_erro_senha !== ""):
	?>

	<script>
		$("#campoSenha").addClass("erro");
	</script>

	<?php 
		endif;
	?>
</body>
</html>
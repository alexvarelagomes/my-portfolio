// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão de alternância de tema pelo ID
    const btnTema = document.getElementById("btnTema");
    const body = document.body;

    // Escuta o clique no botão de tema
    btnTema.addEventListener("click", function() {
        // A função 'toggle' adiciona a classe se não existir, ou remove se existir
        body.classList.toggle("dark-mode");
        
        // Altera o texto e o ícone do botão dependendo do tema ativo
        if (body.classList.contains("dark-mode")) {
            btnTema.textContent = "☀️ Claro";
        } else {
            btnTema.textContent = "🌙 Escuro";
        }
    });
    
    // Seleciona o formulário de contato pelo ID
    const formContato = document.getElementById("formContato");

    // Adiciona um evento que entende quando o botão de envio é clicado
    formContato.addEventListener("submit", function(evento) {
        
        // Impede o comportamento padrão de recarregar a página ao enviar
        evento.preventDefault();

        // Captura os valores digitados nos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Regex para verificar o formato do e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica se todos os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; 
        }

        // Verifica se o formato do e-mail é válido
        if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail válido (ex: usuario@exemplo.com).");
            return;
        }

        // Simulação de Envio: Exibe a mensagem de sucesso e limpa o formulário
        alert("Mensagem enviada com sucesso!");
        formContato.reset();
    });
});
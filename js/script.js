// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão de alternância de tema pelo ID
    const btnTema = document.getElementById("btnTema");
    const body = document.body;

    // Verifica no LocalStorage se o utilizador já ativou o dark mode
    if (localStorage.getItem("tema") === "escuro") {
        body.classList.add("dark-mode");
        btnTema.textContent = "☀️ Claro";}

    // Escuta o clique no botão de tema
    btnTema.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        
        // Altera o texto do botão e guarda a preferência
        if (body.classList.contains("dark-mode")) {
            btnTema.textContent = "☀️ Claro";
            localStorage.setItem("tema", "escuro"); // Guarda a escolha do utilizador
        } else {
            btnTema.textContent = "🌙 Escuro";
            localStorage.setItem("tema", "claro"); // Guarda a escolha do utilizador
        }});
    
    // Seleciona o formulário de contato pelo ID
    const formContato = document.getElementById("formContato");

    // Adiciona um evento que entende quando o botão de envio é clicado
    if (formContato) {
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
}
});
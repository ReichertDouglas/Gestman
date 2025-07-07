document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obter valores dos campos
    const username = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
    
    // Validação simples (em um caso real, você faria uma verificação no servidor)
    if (username === 'admin' && password === '1234') {
        // Login bem-sucedido - redirecionar para a página de dashboard
        window.location.href = 'dashboard.html';
        
        // Opcional: Armazenar informação de login (não seguro para dados sensíveis)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
    } else {
        // Exibir mensagem de erro
        document.getElementById('errorMessage').textContent = 'Usuário ou senha incorretos!';
    }
});

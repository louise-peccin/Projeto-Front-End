document.addEventListener('DOMContentLoaded', function() {
    // Carrega as mensagens salvas no Local Storage ao carregar a página
    carregarMensagens();

    // Adiciona o evento de keypress para enviar mensagem com Enter
    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    });
});

/**
 * Função para formatar a data e hora atual para as mensagens.
 * @returns {string} Data e hora formatadas (DD/MM/AAAA HH:MM:SS).
 */
function formatarDataAtual() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

/**
 * Função para enviar uma nova mensagem para o fórum.
 * Armazena a mensagem no Local Storage e a exibe no chat.
 */
function enviarMensagem() {
    const input = document.getElementById("messageInput");
    const messageText = input.value.trim();

    if (messageText === "") {
        alert('Por favor, digite uma mensagem para enviar.');
        return;
    }

    const dataEnvio = formatarDataAtual();

    // Recupera as mensagens existentes do Local Storage
    let mensagens = JSON.parse(localStorage.getItem('mensagensForum')) || [];

    // Cria um novo objeto de mensagem
    const novaMensagem = {
        texto: messageText,
        data: dataEnvio
        // Futuramente, pode-se adicionar nome do usuário, etc.
    };

    // Adiciona a nova mensagem à lista
    mensagens.push(novaMensagem);

    // Salva a lista atualizada no Local Storage
    localStorage.setItem('mensagensForum', JSON.stringify(mensagens));

    // Adiciona a nova mensagem ao chat box
    adicionarMensagemAoChat(novaMensagem);

    input.value = ""; // Limpa o input
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight; // Rola para o final do chat
}

/**
 * Função auxiliar para adicionar uma mensagem ao DOM (chat box).
 * @param {object} mensagem - O objeto de mensagem a ser adicionado.
 */
function adicionarMensagemAoChat(mensagem) {
    const chatBox = document.getElementById("chatBox");
    const newMsgDiv = document.createElement("div");
    newMsgDiv.className = "message"; // Classe para estilização
    newMsgDiv.innerHTML = `
        <p>${mensagem.texto}</p>
        <span class="timestamp">${mensagem.data}</span>
    `;
    chatBox.appendChild(newMsgDiv);
}

/**
 * Função para carregar e exibir as mensagens do Local Storage.
 */
function carregarMensagens() {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = ''; // Limpa o chat box antes de recarregar
    let mensagens = JSON.parse(localStorage.getItem('mensagensForum')) || [];

    if (mensagens.length === 0) {
        const welcomeMsgDiv = document.createElement("div");
        welcomeMsgDiv.className = "message";
        welcomeMsgDiv.textContent = "Bem-vindo ao fórum! Aqui você pode tirar dúvidas sobre coleta seletiva e reciclagem. Nenhuma mensagem ainda, seja o primeiro a postar!";
        chatBox.appendChild(welcomeMsgDiv);
        return;
    }

    mensagens.forEach(mensagem => {
        adicionarMensagemAoChat(mensagem);
    });
    chatBox.scrollTop = chatBox.scrollHeight; // Rola para o final do chat ao carregar
}

/**
 * Função para limpar todas as mensagens do fórum e do Local Storage.
 */
function limparTodasMensagens() {
    if (confirm('Tem certeza que deseja limpar todas as mensagens do fórum? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('mensagensForum'); // Remove a chave inteira
        carregarMensagens(); // Recarrega para mostrar a mensagem de boas-vindas novamente
        alert('Todas as mensagens foram removidas.');
    }
}
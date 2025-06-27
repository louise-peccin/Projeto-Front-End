document.addEventListener('DOMContentLoaded', function() {
    const cadastroUsuarioForm = document.getElementById('cadastroUsuarioForm');
    const listaDeUsuarios = document.getElementById('listaDeUsuarios');
    const pesquisaInput = document.getElementById('pesquisaInput');

    // Função para obter usuários do localStorage
    function obterUsuarios() {
        const usuariosString = localStorage.getItem('usuariosCadastrados');
        return usuariosString ? JSON.parse(usuariosString) : [];
    }

    // Função para salvar usuários no localStorage
    function salvarUsuarios(usuarios) {
        localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios));
    }

    // Função para exibir/atualizar a lista de usuários
    function carregarUsuarios(filtro = '') {
        const usuarios = obterUsuarios();
        listaDeUsuarios.innerHTML = ''; // Limpa a lista antes de carregar

        const usuariosFiltrados = usuarios.filter(usuario =>
            usuario.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            usuario.email.toLowerCase().includes(filtro.toLowerCase())
        );

        if (usuariosFiltrados.length === 0 && usuarios.length > 0) { // Se há usuários, mas o filtro não encontrou
            listaDeUsuarios.innerHTML = '<p style="text-align: center; color: var(--cor5);">Nenhum usuário encontrado com o filtro.</p>';
            return;
        } else if (usuarios.length === 0) { // Se não há usuários cadastrados (lista totalmente vazia)
             listaDeUsuarios.innerHTML = '<p style="text-align: center; color: var(--cor5);">Nenhum usuário cadastrado.</p>';
             return;
        }
        // Se há usuários e o filtro encontrou (ou não há filtro)
        usuariosFiltrados.forEach(usuario => {
            const listItem = document.createElement('li');
            listItem.className = 'message'; // Reutiliza o estilo de mensagem
            listItem.innerHTML = `
                <input type="checkbox" class="usuario-checkbox" data-email="${usuario.email}">
                <strong>${usuario.nome}</strong> (${usuario.tipo}) - ${usuario.email}
                <button type="button" class="btn-excluir-individual" data-email="${usuario.email}" style="background-color: #d9534f; margin-left: 15px; padding: 5px 10px; border-radius: 5px; color: white; border: none; cursor: pointer;">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            `;
            listaDeUsuarios.appendChild(listItem);
        });

        // Adiciona event listeners para os novos botões de exclusão individual
        document.querySelectorAll('.btn-excluir-individual').forEach(button => {
            button.addEventListener('click', function() {
                const emailDoUsuario = this.getAttribute('data-email');
                if (confirm(`Tem certeza que deseja excluir o usuário ${emailDoUsuario}?`)) {
                    excluirUsuario(emailDoUsuario);
                }
            });
        });
    }

    // Função para excluir um usuário específico
    function excluirUsuario(email) {
        let usuarios = obterUsuarios();
        usuarios = usuarios.filter(usuario => usuario.email !== email); // Remove o usuário pelo email
        salvarUsuarios(usuarios);
        carregarUsuarios(pesquisaInput.value); // Recarrega a lista com o filtro atual (se houver)
        alert(`Usuário ${email} excluído com sucesso!`);
    }

    // Função para excluir todos os usuários
    window.excluirTodosUsuarios = function() {
        if (confirm('ATENÇÃO: Tem certeza que deseja excluir TODOS os usuários? Esta ação é irreversível!')) {
            localStorage.removeItem('usuariosCadastrados'); // Remove a chave inteira do localStorage
            carregarUsuarios(); // Recarrega a lista (que agora estará vazia)
            alert('Todos os usuários foram excluídos com sucesso!');
        }
    };

    // Função para adicionar um novo usuário (usada pelo formulário)
    if (cadastroUsuarioForm) { // Verifica se o formulário existe antes de adicionar o listener
        cadastroUsuarioForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('adminNome').value.trim();
            const email = document.getElementById('adminEmail').value.trim();
            const tipo = document.getElementById('adminTipo').value;

            if (!nome || !email || !tipo) {
                alert('Por favor, preencha todos os campos do cadastro.');
                return;
            }

            let usuarios = obterUsuarios();

            // Verifica se o email já existe
            const emailExistente = usuarios.some(usuario => usuario.email === email);
            if (emailExistente) {
                alert('Já existe um usuário cadastrado com este e-mail.');
                return;
            }

            const novoUsuario = { nome, email, tipo };
            usuarios.push(novoUsuario);
            salvarUsuarios(usuarios);
            alert('Usuário cadastrado com sucesso!');
            cadastroUsuarioForm.reset(); // Limpa o formulário
            carregarUsuarios(); // Recarrega a lista
        });
    }

    // Função para limpar os campos do formulário de cadastro
    window.limparCamposCadastro = function() {
        if (cadastroUsuarioForm) {
            cadastroUsuarioForm.reset();
        }
    };

    // Função para pesquisar usuários
    window.pesquisarUsuarios = function() {
        const filtro = pesquisaInput.value.trim();
        carregarUsuarios(filtro);
    };

    // Funções para marcar/desmarcar todos os checkboxes e excluir selecionados
    window.marcarTodos = function() {
        const checkboxes = document.querySelectorAll('.usuario-checkbox');
        checkboxes.forEach(cb => cb.checked = true);
    };

    window.desmarcarTodos = function() {
        const checkboxes = document.querySelectorAll('.usuario-checkbox');
        checkboxes.forEach(cb => cb.checked = false);
    };

    window.excluirUsuariosSelecionados = function() {
        const checkboxesSelecionados = document.querySelectorAll('.usuario-checkbox:checked');
        if (checkboxesSelecionados.length === 0) {
            alert('Nenhum usuário selecionado para exclusão.');
            return;
        }

        if (!confirm('Tem certeza que deseja excluir os usuários selecionados?')) {
            return;
        }

        let usuariosParaManter = obterUsuarios();
        const emailsParaExcluir = Array.from(checkboxesSelecionados).map(cb => cb.getAttribute('data-email'));

        usuariosParaManter = usuariosParaManter.filter(usuario => !emailsParaExcluir.includes(usuario.email));
        salvarUsuarios(usuariosParaManter);
        alert(`${emailsParaExcluir.length} usuário(s) excluído(s) com sucesso!`);
        carregarUsuarios(pesquisaInput.value); // Recarrega a lista com o filtro atual
    };

    // Carrega os usuários ao carregar a página
    carregarUsuarios();
});
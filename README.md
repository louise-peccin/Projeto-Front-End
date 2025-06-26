# EcoRecicla: Coleta Seletiva e Comunidade Online

![Logo EcoRecicla](Logo.svg) 
## Descrição do Projeto

O **EcoRecicla** é uma aplicação web desenvolvida como parte do Projeto da disciplina de Programação Web Front-End (2025_01) da UTFPR. O objetivo principal é educar os usuários sobre a importância da coleta seletiva e como realizá-la corretamente, além de oferecer um espaço interativo para a comunidade.

A aplicação aborda os princípios e benefícios da reciclagem, fornecendo um guia visual sobre a separação de resíduos em lixeiras coloridas. Além disso, conta com um fórum de discussão para que os usuários possam interagir, trocar informações e fazer perguntas sobre temas relacionados à sustentabilidade e reciclagem. Para gerenciamento, há um painel administrativo.

## Funcionalidades Principais

* **Guia de Coleta Seletiva:**
    * Informações detalhadas sobre o "porquê" e "como" da coleta seletiva.
    * Sessão interativa com imagens de lixeiras coloridas (azul, vermelha, verde) e seus respectivos materiais para descarte (papel, plástico, vidro).
    * Carrossel de imagens para visualização fácil dos tipos de lixo em cada lixeira.
* **Fórum de Discussão:**
    * Ambiente onde usuários podem enviar mensagens e participar de conversas.
    * Exibição dinâmica das mensagens enviadas.
    * Funcionalidade para limpar todas as mensagens do fórum (para administração/testes).
* **Painel Administrativo (Admin):**
    * Interface para cadastro de novos usuários.
    * Funcionalidade de pesquisa de usuários por nome ou e-mail.
    * Listagem de usuários cadastrados com opções de seleção e exclusão em massa.
* **Autenticação de Usuários:**
    * Páginas de Login e Cadastro de Usuários (com campos como nome, idade, e-mail, cidade e tipo de conta).
* **Navegação Simplificada:**
    * Header responsivo com links diretos para Coleta Seletiva, Fórum e Admin, além de botões para Entrar e Cadastrar.
    * Navegação aprimorada para evitar redirecionamentos desnecessários (agora direto entre Admin e Fórum).
* **Responsividade:**
    * Layout adaptável para diferentes tamanhos de tela (desktops, tablets e smartphones).

## Tecnologias Utilizadas

* **HTML5:** Estrutura e conteúdo das páginas web.
* **CSS3:** Estilização e layout responsivo da aplicação (`style1.css` para layout principal e `style2.css` para páginas de autenticação).
* **JavaScript:** Lógica interativa para o carrossel, funcionalidades do fórum (enviar/limpar mensagens) e gestão de usuários no painel administrativo (cadastro, pesquisa, exclusão).
* **Font Awesome:** Ícones utilizados em toda a aplicação para melhorar a experiência visual.
* **Google Fonts (Poppins):** Fonte tipográfica utilizada para o design moderno.

## Como Executar o Projeto Localmente

1.  **Clone o Repositório:**
    ```bash
    git clone [[LINK_DO_SEU_REPOSITORIO](https://github.com/louise-peccin/Projeto-Front-End)]
    cd Projeto-Front-End
    ```
2.  **Abra os Arquivos:**
    Simplesmente abra o arquivo `Principal.html` em seu navegador web. Todos os outros arquivos (CSS, JS, outras páginas HTML e imagens) devem estar na mesma estrutura de diretórios para que a aplicação funcione corretamente.

## Estrutura do Projeto
├── admin.html
├── cadastro.html
├── forum.html
├── index.html (ou Principal.html)
├── login.html
├── style1.css
├── style2.css
├── Logo.svg
├── Reciclagem.jpeg
├── Lixeira Azul - Papel.avif
├── Lixeira Vermelha - Plástico.avif
├── Lixeira Verde - Vidro.avif
└── ... (outros arquivos de imagem ou js, se houver)

* `Principal.html`: Página inicial com o guia de coleta seletiva e carrossel.
* `forum.html`: Página do fórum de discussão.
* `admin.html`: Painel de administração de usuários.
* `login.html`: Página de login de usuários.
* `cadastro.html`: Página de cadastro de novos usuários.
* `style1.css`: Folha de estilos principal para as páginas informativas e o header.
* `style2.css`: Folha de estilos para as páginas de login e cadastro.
* `Logo.svg`: Logotipo do projeto.
* `Reciclagem.jpeg`, `Lixeira Azul - Papel.avif`, etc.: Imagens do guia de coleta.

## Créditos

Este projeto foi desenvolvido pelos seguintes membros da equipe:

* **Gabriela Saori Miyasaka:** [[Link para Portfólio/GitHub](https://gsaorim.github.io/Aula_5_CSS/)]
* **Julia Beiroco Oliveira Fantini:** [curriculo_julia.pdf]
* **Louise Paccola Peccin:** [[Link para Portfólio/GitHub](https://louise-peccin.github.io/curriculo-louise/)]

Professor(a): Rosangela de Fátima Pereira Marquesone

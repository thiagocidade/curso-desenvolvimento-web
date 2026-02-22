/* ==========================================
   JAVASCRIPT PRINCIPAL - PROJETO FINAL
   Fundamentos de Desenvolvimento Web
   ========================================== */

// ===== MENU DE NAVEGAÇÃO MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('aberto');

        // Alterna o ícone do botão
        const aberto = menu.classList.contains('aberto');
        menuToggle.textContent = aberto ? '✕' : '☰';
        menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('aberto');
            menuToggle.textContent = '☰';
        });
    });
}

// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();

        // Limpar erros anteriores
        limparErros();

        // Capturar valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        let formularioValido = true;

        // Validar nome
        if (nome.length < 3) {
            exibirErro('nome', 'O nome deve ter pelo menos 3 caracteres.');
            formularioValido = false;
        }

        // Validar email
        if (!validarEmail(email)) {
            exibirErro('email', 'Por favor, insira um e-mail válido.');
            formularioValido = false;
        }

        // Validar mensagem
        if (mensagem.length < 10) {
            exibirErro('mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
            formularioValido = false;
        }

        // Se tudo válido, enviar
        if (formularioValido) {
            // Ocultar formulário e mostrar mensagem de sucesso
            formContato.style.display = 'none';
            const sucessoCard = document.getElementById('sucesso-card');
            if (sucessoCard) {
                sucessoCard.style.display = 'block';
            }
        }
    });

    // Validação em tempo real - remover erro ao digitar
    ['nome', 'email', 'mensagem'].forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (campo) {
            campo.addEventListener('input', () => {
                campo.classList.remove('erro');
                const spanErro = campo.parentElement.querySelector('.mensagem-erro');
                if (spanErro) spanErro.textContent = '';
            });
        }
    });
}

// Função para validar formato de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para exibir mensagem de erro
function exibirErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    if (!campo) return;

    campo.classList.add('erro');

    const spanErro = campo.parentElement.querySelector('.mensagem-erro');
    if (spanErro) {
        spanErro.textContent = mensagem;
    }
}

// Função para limpar todos os erros
function limparErros() {
    document.querySelectorAll('.erro').forEach(el => el.classList.remove('erro'));
    document.querySelectorAll('.mensagem-erro').forEach(el => el.textContent = '');
}

// ===== TEMA CLARO/ESCURO (BÔNUS) =====
// TODO: Descomente o código abaixo para implementar o toggle de tema
/*
const toggleTema = document.getElementById('toggle-tema');

if (toggleTema) {
    // Carregar preferência salva
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('tema-escuro');
    }

    toggleTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-escuro');

        const temaAtual = document.body.classList.contains('tema-escuro')
            ? 'escuro'
            : 'claro';
        localStorage.setItem('tema', temaAtual);
    });
}
*/

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);
            location.href = 'dashboard.html';
        });
    }

    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Salvar dados no banco de dados (simulação)
            location.href = 'index.html';
        });
    }

    const editarInformacoesForm = document.getElementById('editarInformacoesForm');
    if (editarInformacoesForm) {
        editarInformacoesForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Salvar alterações no banco de dados (simulação)
            location.href = 'dashboard.html';
        });
    }

    const adicionarUnidadeForm = document.getElementById('adicionarUnidadeForm');
    if (adicionarUnidadeForm) {
        adicionarUnidadeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Salvar unidades no banco de dados (simulação)
            location.href = 'confirmacao.html';
        });
    }

    const userName = localStorage.getItem('username');
    if (userName && document.getElementById('userName')) {
        document.getElementById('userName').textContent = userName;
    }
});

function addUnidade() {
    const container = document.getElementById('unidadesContainer');
    const unidadeCount = container.children.length;
    const newUnidade = document.createElement('div');
    newUnidade.classList.add('unidade');
    newUnidade.innerHTML = `
        <input type="checkbox" id="unidade${unidadeCount + 1}" name="unidade${unidadeCount + 1}">
        <label for="unidade${unidadeCount + 1}">Unidade ${unidadeCount + 1}</label>
    `;
    container.appendChild(newUnidade);
}

function solicitarRescisao() {
    // Função para solicitar rescisão
    const selectedUnits = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    if (selectedUnits.length > 0) {
        location.href = 'solicitacao-rescisao.html';
    } else {
        alert('Nenhuma unidade selecionada');
    }
}

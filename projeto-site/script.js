// [Engenharia] Espera todo o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos que vamos usar
    const corpo = document.body;
    const btnPadrao = document.getElementById('btn-padrao');
    const btnFoco = document.getElementById('btn-foco');

    // [Função] Aplica o modo Foco
    function ativarModoFoco() {
        corpo.classList.remove('modo-padrao');
        corpo.classList.add('modo-foco');
        
        // Atualiza o estado visual dos botões
        btnPadrao.classList.remove('ativo');
        btnFoco.classList.add('ativo');

        // [Persistência] Salva a preferência no navegador
        localStorage.setItem('preferenciaSensorial', 'foco');
        console.log('IA/UX: Modo Foco ativado e salvo.');
    }

    // [Função] Aplica o modo Padrão
    function ativarModoPadrao() {
        corpo.classList.remove('modo-foco');
        corpo.classList.add('modo-padrao');
        
        // Atualiza o estado visual dos botões
        btnFoco.classList.remove('ativo');
        btnPadrao.classList.add('ativo');

        // [Persistência] Salva a preferência no navegador
        localStorage.setItem('preferenciaSensorial', 'padrao');
        console.log('IA/UX: Modo Padrão ativado e salvo.');
    }

    // [Engenharia] Adiciona os "ouvidores" de clique nos botões
    btnFoco.addEventListener('click', ativarModoFoco);
    btnPadrao.addEventListener('click', ativarModoPadrao);

    // [UX Avançado] Ao carregar a página, verifica se já existe uma preferência salva
    const preferenciaSalva = localStorage.getItem('preferenciaSensorial');

    if (preferenciaSalva === 'foco') {
        ativarModoFoco(); // Se era foco, mantém foco
    } else {
        ativarModoPadrao(); // Se era padrão (ou primeira vez), mantém padrão
    }
});
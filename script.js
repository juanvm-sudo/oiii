// Banco de dados centralizado
const BANCO_DE_JOGOS = {
    "ação": "God of War Ragnarök e Elden Ring",
    "aventura": "The Last of Us Part II e Zelda: Tears of the Kingdom",
    "tiro": "Call of Duty: Warzone, Valorant e Counter-Strike 2",
    "fps": "Call of Duty: Warzone, Valorant e Counter-Strike 2",
    "rpg": "Baldur's Gate 3, The Witcher 3 e Final Fantasy VII Rebirth",
    "mundo aberto": "GTA V, Red Dead Redemption 2 e Cyberpunk 2077",
    "esporte": "EA Sports FC 24 e NBA 2K24",
    "terror": "Resident Evil Village e Silent Hill 2 Remake",
    "grátis": "Fortnite, League of Legends e Genshin Impact"
};

function adicionarMensagem(texto, tipo) {
    const box = document.getElementById('mensagens');
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerHTML = texto;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight; // Auto-scroll para o fim
}

function enviarMensagem() {
    const input = document.getElementById('usuario-input');
    const texto = input.value.trim();
    
    if (texto !== "") {
        adicionarMensagem(texto, 'user-msg');
        input.value = "";
        // Simula um pequeno atraso para parecer que a IA está "pensando"
        setTimeout(() => responder(texto), 500);
    }
}

function responder(texto) {
    const msg = texto.toLowerCase();
    let resposta = "Hmm, não encontrei jogos exatamente com esse termo. Tente categorias como **RPG**, **FPS**, **esporte**, **ação**,  **tiro**, **aventura**, **mundo aberto** ou **Terror**.";

    // Busca inteligente no Banco de Dados
    for (let categoria in BANCO_DE_JOGOS) {
        if (msg.includes(categoria)) {
            resposta = `Para **${categoria.toUpperCase()}**, recomendo: ${BANCO_DE_JOGOS[categoria]}.`;
            break; 
        }
    }

    adicionarMensagem(resposta, 'bot-msg');
}

// Permitir enviar com a tecla Enter
document.getElementById('usuario-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensagem();
});
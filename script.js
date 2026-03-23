function responder(texto) {
    const msg = texto.toLowerCase();
    let resposta = "Não conheço jogos com essa especificação ainda. Tente digitar 'Ação', 'RPG', 'Tiro' ou 'Mundo Aberto'!";

    // Lógica de Recomendação de Jogos Conhecidos
    if(msg.includes("ação") || msg.includes("aventura")) {
        resposta = "Para Ação/Aventura, os mais jogados são: **God of War Ragnarök**, **The Last of Us Part II** e **Elden Ring**.";
    } 
    else if(msg.includes("tiro") || msg.includes("fps")) {
        resposta = "Se você curte tiro, recomendo: **Call of Duty: Warzone**, **Valorant** ou **Counter-Strike 2**.";
    }
    else if(msg.includes("rpg")) {
        resposta = "Os mestres do RPG atualmente são: **Baldur's Gate 3**, **The Witcher 3: Wild Hunt** e **Final Fantasy VII Rebirth**.";
    }
    else if(msg.includes("mundo aberto")) {
        resposta = "Para explorar mundos gigantes: **GTA V**, **Red Dead Redemption 2** ou **Zelda: Tears of the Kingdom**.";
    }
    else if(msg.includes("esporte") || msg.includes("futebol")) {
        resposta = "Os clássicos de esporte: **EA Sports FC 24 (antigo FIFA)** e **NBA 2K24**.";
    }
    else if(msg.includes("terror") || msg.includes("horror")) {
        resposta = "Prepare os sustos com: **Resident Evil Village**, **Silent Hill 2 (Remake)** ou **Phasmophobia**.";
    }
    else if(msg.includes("grátis") || msg.includes("free")) {
        resposta = "Jogos gratuitos de sucesso: **Fortnite**, **League of Legends** e **Genshin Impact**.";
    }

    adicionarMensagem(resposta, 'bot-msg');
}
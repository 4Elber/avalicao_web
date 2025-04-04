// Lista de Notícias
const noticias = [
    {
        titulo: "Mbappé confirma saída do PSG no final da temporada",
        descricao: "O atacante francês Mbappé anunciou que deixará o Paris Saint-Germain ao final desta temporada.",
        link: "https://www.flashscore.com.br/noticias/futebol-ligue-1-mbappe-confirma-saida-do-psg-apos-fim-desta-temporada/nREE27vf/"
    },
    {
        titulo: "Barcelona busca reforços para a próxima temporada",
        descricao: "O clube catalão está de olho em novas contratações para fortalecer o elenco.",
        link: "https://ge.globo.com/futebol/futebol-internacional/futebol-espanhol/noticia/2024/12/26/barcelona-busca-reforcos-para-defesa-meio-e-ataque-segundo-imprensa-espanhola.ghtml"
    },
    {
        titulo: "Vinícius Jr brilha e garante vitória do Real Madrid",
        descricao: "Com dois gols, Vinícius Jr foi o destaque na vitória do Real Madrid sobre o Sevilla.",
        link: "https://www.gaveanews.com/index.php/2024/10/05/video-vinicius-junior-marca-golaco-e-garante-vitoria-do-real-madrid/"
    }
];

// Lista de Times
const times = [
    {
        nome: "Barcelona",
        pais: "Espanha",
        estadio: "Camp Nou",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/210px-FCBarcelona.svg.png",
        jogadores: [
            { nome: "Raphinha", imagem: "https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=940&height=940" },
            { nome: "Lewandowski", imagem: "https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=940&height=940" },
            { nome: "Pedri", imagem: "https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=940&height=940" }
        ]
    },
    {
        nome: "Real Madrid",
        pais: "Espanha",
        estadio: "Santiago Bernabéu",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Real_Madrid.png/180px-Real_Madrid.png",
        jogadores: [
            { nome: "Vinicius Jr", imagem: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a97407da-37f5-4010-9dde-c3cd85827c11/_80x501____6.app.webp?preferwebp=true&width=288&height=384" },
            { nome: "Mbappe", imagem: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--55f53bed-0f8d-4d2f-9ced-587a20a8ca5e/_80x501____20.app.webp?preferwebp=true&width=288&height=384" },
            { nome: "Bellingham", imagem: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--8ba509c1-e4b0-4a65-bba3-9ef55d226e2c/_80x501____17.app.webp?preferwebp=true&width=288&height=384" }
        ]
    },
    {
        nome: "Manchester City",
        pais: "Inglaterra",
        estadio: "Etihad Stadium",
        imagem: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        jogadores: [
            { nome: "Haaland", imagem: "https://www.mancity.com/meta/media/edspvvtx/erling-haaland.png?width=376&quality=100" },
            { nome: "De Bruyne", imagem: "https://www.mancity.com/meta/media/fbqjnjcq/kevin-de-bruyne.png?width=376&quality=100" },
            { nome: "Rodri", imagem: "https://www.mancity.com/meta/media/cfzdcpm2/rodrigo.png?width=376&quality=100" }
        ]
    },
    {
        nome: "Flamengo",
        pais: "Brasil",
        estadio: "Maracanã",
        imagem: "https://th.bing.com/th/id/OIP.WFgg5TVtsfIaS5hs6fmvBAHaHa?w=186&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        jogadores: [
            { nome: "Pedro", imagem: "https://images.flamengo.com.br/public/images/players/7/1738355662.png" },
            { nome: "Arrascaeta", imagem: "https://images.flamengo.com.br/public/images/players/5/1738348675.png" },
            { nome: "Bruno Henrique", imagem: "https://images.flamengo.com.br/public/images/players/7/1738349007.png" }
        ]
    }
];

// Lista de Jogadores
const jogadores = [
    {
        nome: "Lionel Messi",
        time: "Inter Miami",
        posicao: "Atacante",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
    },
    {
        nome: "Cristiano Ronaldo",
        time: "Al-Nassr",
        posicao: "Atacante",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
    },
    {
        nome: "Neymar Jr",
        time: "Santos",
        posicao: "Atacante",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/375px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg"
    }
];

// Lista de Jogos
const jogos = [
    {
        timeCasa: "Real Madrid",
        timeFora: "Barcelona",
        data: "26/04/2025",
        horario: "16:00",
        estadio: "Estádio Olímpico de La Cartuja",
        imagemCasa: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Real_Madrid.png/180px-Real_Madrid.png",
        imagemFora: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/210px-FCBarcelona.svg.png"
    },
    {
        timeCasa: "Liverpool",
        timeFora: "Arsenal",
        data: "11/05/2025",
        horario: "11:30",
        estadio: "Anfield",
        imagemCasa: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        imagemFora: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/53/Arsenal_FC.svg/180px-Arsenal_FC.svg.png"
    },
    {
        timeCasa: "Palmeiras",
        timeFora: "Flamengo",
        data: "25/05/2025",
        horario: "15:00",
        estadio: "Allianz Parque, São Paulo",
        imagemCasa: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
        imagemFora: "https://th.bing.com/th/id/OIP.WFgg5TVtsfIaS5hs6fmvBAHaHa?w=186&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    }
];

// Exibir Notícias
let noticiasContainer = document.getElementById("noticias-lista");
noticias.forEach(noticia => {
    noticiasContainer.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.descricao}</p>
                <a href="${noticia.link}" class="btn btn-primary" target="_blank">Leia mais</a>
            </div>
        </div>
    `;
});

let timesContainer = document.getElementById("times-lista");
times.forEach(time => {
    timesContainer.innerHTML += `
        <div class="card mb-3 p-3">
            <div class="row g-0 align-items-center">
                <!-- Coluna da esquerda (Logo + Informações) -->
                <div class="col-md-4 text-left">
                    <img src="${time.imagem}" class="img-fluid mb-2" alt="${time.nome}" style="max-width: 120px;">
                    <h5 class="card-title">${time.nome}</h5>
                    <p class="card-text">País: ${time.pais}</p>
                    <p class="card-text">Estádio: ${time.estadio}</p>
                </div>

                <!-- Coluna da direita (Jogadores) -->
                <div class="col-md-8 d-flex justify-content-center">
                    <div class="d-flex justify-content-around w-100">
                        ${time.jogadores.map(jogador => `
                            <div class="text-center">
                                <img src="${jogador.imagem}" alt="${jogador.nome}" class="rounded-circle" style="width: 80px; height: 80px; object-fit: cover;">
                                <p class="mt-1" style="font-size: 14px;">${jogador.nome}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
});


// Exibir Jogadores
let jogadoresContainer = document.getElementById("jogadores-lista");
jogadores.forEach(jogador => {
    jogadoresContainer.innerHTML += `
        <div class="card mb-3">
            <img src="${jogador.imagem}" class="card-img-top" alt="${jogador.nome}" style="max-width: 100px;">
            <div class="card-body">
                <h5 class="card-title">${jogador.nome}</h5>
                <p class="card-text">Time: ${jogador.time}</p>
                <p class="card-text">Posição: ${jogador.posicao}</p>
            </div>
        </div>
    `;
});

// Exibir Calendário de Jogos
let calendarioContainer = document.getElementById("calendario-lista");
jogos.forEach(jogo => {
    calendarioContainer.innerHTML += `
    <div class="card mb-3">
        <div class="card-body text-center">
            <div class="d-flex align-items-center justify-content-center">
                <img src="${jogo.imagemCasa}" class="mx-3" alt="${jogo.timeCasa}" style="max-width: 50px;">
                <h5>${jogo.timeCasa} vs ${jogo.timeFora}</h5>
                <img src="${jogo.imagemFora}" class="mx-3" alt="${jogo.timeFora}" style="max-width: 50px;">
            </div>
            <p class="card-text">📅 Data: ${jogo.data}</p>
            <p class="card-text">⏰ Horário: ${jogo.horario}</p>
            <p class="card-text">🏟️ Estádio: ${jogo.estadio}</p>
        </div>
    </div>
`;
});

// Mostrar o botão apenas quando a página for rolada para baixo
window.onscroll = function () {
    let btn = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
};

// Função para voltar ao topo suavemente
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
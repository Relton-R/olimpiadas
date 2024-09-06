function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        //Finaliza a função, não carrega o resto
        return;
    }

    //Transforma o conteúdo digitado em letras minúscula
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        // Transforma os dados da base em minúsculos, para conparar com os do campo de pesquisa
        // Evita de o usuário ter que digitar exatamente a mesma coisa qua a base
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma div para o resultado, se o campo = titulo
            resultados += `
                <div class="item-resultado">
                    <!-- Cria um título com um link para mais detalhes -->
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <!-- Adiciona uma descrição curta -->
                    <p class="descricao-meta">${dado.descricao}</p>
                    <!-- Adiciona um link para mais informações -->
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `
        }
    }

    // Se resultado não existir faça...
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
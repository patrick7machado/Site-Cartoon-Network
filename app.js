function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    if(!campoPesquisa){
      section.innerHTML = "<p>Título não digitado, tente digitar um título.</p>";
      alert("Preencha o campo.")
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let nome = "";
    let descricao = "";
    let genero ="";
    let tags = "";
  
    // Intera sobre cada item (dado) no array de dados.
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      genero = dado.genero.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()

      //se o titulo pesquisado estiver incluso no campo de pesquisa então..      
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento.
        resultados += `
         <div class="item-resultado">
            <h2> <a href="#">${dado.nome}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta"> <strong class="destaque_genero"> Gênero: </strong> ${dado.genero}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
         </div>
          `;
       }
   }

      if(!resultados) {
        resultados = "<p>Título não encontrado, tente buscar outro título.</p>"
      }

    // Atribui o HTML gerado ao conteúdo da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }; 




# Função de Pesquisa Simples

**Descrição:**

Esta função JavaScript implementa uma funcionalidade de pesquisa básica em uma página web. Ao digitar um termo de pesquisa em um campo específico, a função filtra um conjunto de dados e exibe os resultados relevantes em uma seção HTML.

**Funcionalidades:**

* **Pesquisa por múltiplos campos:** Permite pesquisar por termos em nome, descrição, gênero e tags.
* **Exibição de resultados:** Apresenta os resultados da pesquisa em um formato amigável, com título, descrição e link para mais informações.
* **Gerenciamento de casos sem resultados:** Exibe uma mensagem informativa quando nenhum resultado é encontrado.

**Como utilizar:**

1. **HTML:**
   * Inclua um campo de entrada com o ID "campo-pesquisa".
   * Inclua uma seção com o ID "resultados-pesquisa" para exibir os resultados.
2. **JavaScript:**
   * Chame a função `pesquisar()` quando o usuário clicar em um botão ou ao perder o foco do campo de pesquisa.
3. **Dados:**
   * Certifique-se de ter um array de objetos chamado `dados` no escopo da função, contendo os dados a serem pesquisados. Cada objeto deve ter as propriedades `nome`, `descricao`, `genero` e `tags`.

4. Link no Vercel- https://site-cartoon-network-89xtrw0o7-patricks-projects-8e862c4d.vercel.app

Para rodar o projeto, basta abrir a index.html no seu navegador.

Desenvolvimento do raciocínio lógico:

primeiro, pegamos o id do botao no html 'botaoRequisicao' e através do document.getElementById e do addEventListener, adicionamos uma função 'click' a esse botão. Isso significa que, quando o botao for clicado, será requisitada atráves do comando fetch. Logo em seguida, dentro da .then, adicionamos o getElementById, pegando o id da div em que a API externa aparecerá (#apiExterna). O .catch, serve para caso hajá um erro, será gerada a mensagem dizendo que 'Ocorreu um erro na requisição'.

Quais membros fizeram cada parte do projeto:

Arthur Amaral de Medeiros: html, readme e js
Arthur Diniz Teixeira: css e js 
Isadora Ferreira de Holanda: readme e js 

Uma breve descrição de como o código funciona:

Evento de Clique: O código escuta o evento de clique no botão botaoRequisicao.
Requisição Fetch: Ao clicar, ele faz uma requisição para a (https://jsonplaceholder.typicode.com/posts/1).
Processamento da Resposta: Quando a resposta é recebida, ela é convertida de JSON para um objeto JavaScript usando response.json().
Exibição dos Dados: Os dados recebidos são transformados em uma string formatada (com indentação) e exibidos em um elemento com o ID apiExterna.
Tratamento de Erros: Se ocorrer algum erro durante a requisição, ele é capturado pelo bloco catch, que registra o erro no console e atualiza o elemento apiExterna com uma mensagem de erro (Ocorreu um erro na requisição).

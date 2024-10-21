document.getElementById('botaoRequisicao').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiExterna').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('apiExterna').textContent = 'Ocorreu um erro na requisição';
        });
});
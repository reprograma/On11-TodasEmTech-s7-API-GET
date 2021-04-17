# Para o Lar - ReprogramaFlix

Crie uma API que Retorne os Filmes e Séries disponíveis no catalogo.

Deve ser possível fazer pesquisa por Gênero, ID e Nome.

## Rotas

### [GET] "/catalogo"

Retorna todos os filmes e séries

### [GET] "/catalogo/{gênero}"

Retorna todos os filmes e séries de um dado gênero

### [GET] "/catalogo/filmes"

Retorna todos os filmes

### [GET] "/catalogo/filmes/{id}"

Retorna filme pelo ID

### [GET] "/catalogo/filmes/{nome}"

Retorna filme pelo nome

### [GET] "/catalogo/filmes/{gênero}"

Retorna todos os filmes de um dado gênero

### [GET] "/catalogo/series"

Deve retornar todas as séries

### [GET] "/catalogo/series/{id}"

Retorna séries pelo ID

### [GET] "/catalogo/series/{nome}"

Retorna séries pelo nome

### [GET] "/catalogo/series/{gênero}"

Retorna todos as séries de um dado gênero
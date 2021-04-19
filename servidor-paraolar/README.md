# Para o lar!

Para o lar ficam as seguintes rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para o lar devera ser feito dentro da pasta servidor-paraolar. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-paraolar
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```

Observe que o json de estados-cidades, está um pouco mais simples! **O foco desse exercício é que vocês consigam entender bem quais são os comandos necessários para criar um servidor com node.js**

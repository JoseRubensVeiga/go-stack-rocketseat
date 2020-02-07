# GoStack Rocketseat 🚀
Nesse repositório vou armazenar todas as minhas anotações, códigos e exercícios feitos durante o bootcamp GoStack 10 da Rocketseat.
Para as minhas notações, usarei o [Notion](https://www.notion.so/) e vou transcrever elas para o github após o término do bootcamp.
Todas os módulos e desafios terão seus tópicos que descreverão os aprendizados e observações que terei em cada um deles.
## Módulo 01 - Conceitos
### Conteúdo da Requisição
No node, existem 3 tipos de obtenção dos dados enviados pela requisição.
- Query Params
- Route Params
- Body Params
- (Adicional) Headers
### Query Params
Nos parâmetros obtidos pela Query, podemos enviar dados de pesquisa, como o id do usuário ou do produto que desejamos pesquisar ou editar. Esses dados serão inseridos na URL da requisição, sendo assim, é necessário utilizar esses parâmetros com sabedoria, pois não podemos inserir dados sigilosos nesse tipo de requisição. Exemplo: **/page?number=2**
### Route Params
Nos parâmetros de rotas, podemos enviar também dados de pesquisa. Como esse tipo de parâmetro também vai ser enviado pela URL, tem muitas características que também se encontra no _Query Params_. Porém nesse tipo de requisição, os dados são enviados de uma forma _friendly user_. Exemplo: **/page/2/**
### Body Params
Pelo contrário aos outros, esse método de envio de dados na requisição é mais seguro, pois é significativamente mais difícil expor esses dados a usuários. Esses dados são enviados juntamente com a requisição e não precisam ser expostos na URL. Deve ser usado principalmente em duas ocasiões:
1. Enviar dados sigiloso
2. Enviar muitos dados
### Enviar dados sigilosos
Como os dados são enviados por _baixo dos panos_. É mais difícil expor esses dados.
### Enviar muitos dados
No tipo de envio de dados pela URL, a quantidade de informação enviada é limitada. Pois a URL requisitada é limitada a somente 255 caracteres. Já no envio de dados pelo **corpo** da requisição, não temos esse limite.
### Headers
São dados que normalmente não se repetem e que complementam a requisição como: Com que tipo de estrutura as informações estão sendo enviadas, qual é o tipo de estrutura que a resposta precisa ter, informações de acesso como token, locations, languages, etc.
### Http Codes
Os **HTTP CODES** são números que são enviados na resposta de cada requisição. Elas têm a finalidade de explicar o resultado do back-end em relação a requisição. Existem diversos **HTTP Codes**:
- 1xx - Informational
- 2xx - Success
	- 200 - OK: Tudo deu certo!
	- 201 - CREATED: Conteúdo foi criado com sucesso!
- 3xx - Redirection1 - MOVED PERMANENTLY: A página foi mudada para outra URL permanentemente.
	- 302 - MOVED: A página foi movida.
- 4xx - Client Error
	- 400 - BAD REQUEST: Erro nos parâmetros enviados.
	- 401 - UNAUTHORIZED: Usuário não autorizado para executar essa ação.
	- 404 - NOT FOUND: Conteúdo não encontrado
- 5xx - Server Error
	- 500 - INTERNAL SERVER ERROR: Erro interno do servidor. (Precisa de tratamento no back-end mas também pode ser encarado como erro nos parâmetros)
## Módulo 02 - Introdução ao Node
### Instalando o Yarn
O [Yarn](https://yarnpkg.com/) é um gerenciador de pacotes muito parecido com o [NPM](https://www.npmjs.com/). Ele tem o NPM como dependência então utiliza algumas de suas funcionalidades para executar. Ele é relativamente superior em velocidade do que o NPM, sendo assim, nesse projeto foi recomendado instalá-lo para ser utilizado em todo o bootcamp. É possível instalá-lo utilizando o NPM com o comando `npm install -g yarn`. Para ir até a documentação Oficial do Yarn [Clique aqui](https://yarnpkg.com/cli/install). Se você *(Assim como eu)* também está acostumado com os comando do NPM ver [este link](https://legacy.yarnpkg.com/en/docs/migrating-from-npm/) pode ajudá-lo.

### Obtendo parâmetros de requisição.
No Node, podemos acessar 4 tipos de parâmetros enviados pela requisição:
  - Query Params - Acessado via req.query;
  - Route Params - Acessado via req.params;
  - Body Params - Acessado via req.body;
  - Header Params - Acessado via req.headers;

### Instalando e utilizando Insomnia
O [Insomnia](https://insomnia.rest) é um simulador e gerenciador de requisições muito parecido com o [Postman](https://getpostman.com). Durante o curso, ele será utilizado para fazer os testes de requisição e documentar a nossa API. É possível instalar o Insomnia [Clicando aqui](https://insomnia.rest/download/). Caso você esteja usando um sistema operacional windows de 32 bits. Utilize o Postman para fazer esse trabalho.

### Instalando o nodemon
O [Nodemon](https://www.npmjs.com/package/nodemon) é um automatizador de atualização do Node. A cada atualização que fazemos em um arquivo dentro do projeto que está usando um servidor baseado no nodemon, o servidor automaticamente é atualizado de forma que melhora muito nossa produção. Nesse projeto, usamos ele para essa finalidade.
### CRUD
No node, as requisições são feitas de forma diferente do que no PHP por exemplo. É possível armazenar variáveis dentro do servidor que estarão disponíveis para todos os clientes. Ou seja, se eu criar uma variável `soma = 0;` e a cada requisição ele executa um `soma++;`, para cada requisição o valor da variável soma pode ser diferente. Ao contrário do PHP que a cada requisição ele criaria uma variável soma diferente com o valor de 0

### Middlewares
Os middlewares funcionam exatamente como no [Laravel](https://laravel.com/). São os interceptadores que as rotas executam quando dão um *match* com a URL requisitada. Com o comando `server.use()` podemos criar novas middlewares que serão executadas em toda requisição. E podemos também inserir novas middlewares dentro de cada rota individualmente com a sintaxe:

    server.[method]('/rota', middlewareFn, (res, req) => { 
	    // my code 
    })

### Debug com VSCode
No curso aprendemos como utilizar a aba de Debug do VSCode. Para mais informações [Clique aqui!](https://code.visualstudio.com/docs/editor/debugging)


# Módulo 02 =)

## Ambiente e conceitos

### Configurando a estrutura
### Nodemon & Sucrase
### Conceitos de docker
### Configurando o Docker
### Sequelize & MVC
### ESLint, Prettier & EditorConfig
### Configurando o Sequelize

## Cadastro e autenticação de usuários

### Migration de usuário
### Model de usuário
### Criando o Loader de Models
### Cadastro de usuários
### Gerando hash de senha
### Conceitos de JWT
### Autenticação de JWT
### Middleware de Autenticação
### Update do usuário
### Validando dados de entrada


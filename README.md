# Projeto de Testes de API com Cypress e Cypress-Plugin-API
Projeto de estudos para testes de API utilizando o Cypress e o plugin cypress-plugin-api, utilizando a API pública reqres como exemplo.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:
```
cypress/
├── fixtures/
│   └── user-data.json
├── support/
│   |── commands.js
│   └── e2e.js
├── tests/
│   └── usersTest.cy.js
├── cypress.config.js
└── package.json
```
## Configuração do Ambiente
Para configurar o ambiente, certifique-se de ter o Node.js e o Cypress instalados. Em seguida, instale as dependências do projeto com o seguinte comando:
```bash
npm install
```
## Executando os Testes
Para executar os testes, utilize o seguinte comando:
```bash
npm run test
```
Os testes serão executados no modo headless por padrão.
Para executar no modo interativo, você pode usar:
```bash
npx cypress open
```
## Estrutura dos Testes
Os testes estão localizados na pasta `tests` e seguem a convenção de nomenclatura `*.cy.js`. Cada teste é escrito utilizando a API do Cypress e o plugin cypress-plugin-api para as requisições HTTP.
Casos de Teste:
- **TC001**: Valida a listagem de usuários com o endpoint `GET /users`.
- **TC002**: Valida a obtenção de um usuário específico com o endpoint `GET /users/:id`.
- **TC003**: Verifica o comportamento do endpoint `GET /users/:id` com um ID inválido.
- **TC004**: Valida a criação de um novo usuário com o endpoint `POST /users`.
- **TC005**: Valida a atualização de um usuário existente com o endpoint `PUT /users/:id`.
- **TC006**: Valida a exclusão de um usuário com o endpoint `DELETE /users/:id`.

## Autor
<a href="https://github.com/rafael-isidro">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118776145?v=4" width="100px;" alt="Foto de perfil - Rafael Isidro"/>
    <br />
    <sub><b>Rafael Santos Isidro</b></sub>
</a> 
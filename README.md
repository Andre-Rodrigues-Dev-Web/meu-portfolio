# Documentação do Portfólio de Desenvolvedor de Software - André Laurentino Rodrigues

Este é um repositório do GitHub que contém a documentação para o site portfólio do desenvolvedor de software André Laurentino Rodrigues. O site foi desenvolvido utilizando as seguintes tecnologias:

* React
* Styled Components
* Jest
* Helmet
* React Router Dom

## Descrição do Projeto

O site portfólio do desenvolvedor de software André Laurentino Rodrigues é uma aplicação web que exibe informações sobre seu trabalho, projetos e habilidades. Ele permite aos visitantes visualizar seu currículo, portfólio e entrar em contato para oportunidades profissionais.

## Instalação

Para executar o projeto localmente, siga as etapas abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.

   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
3. Navegue até o diretório clonado.

   `cd andre-laurentino`
4. Instale as dependências do projeto.

   `npm install`
5. Inicie o servidor de desenvolvimento.

   `npm start`

   O site estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

### React

React é uma biblioteca JavaScript de código aberto que permite a criação de interfaces de usuário. Ele é amplamente utilizado para construir interfaces de usuário interativas e reativas para aplicações web.

* Documentação oficial: [React](https://reactjs.org/)

### Styled Components

Styled Components é uma biblioteca para React que permite escrever CSS em JavaScript. Ele permite a criação de componentes React estilizados de forma fácil e reutilizável, com escopo de estilo encapsulado.

* Documentação oficial: [Styled Components](https://styled-components.com/)

### Jest

Jest é um framework de testes em JavaScript mantido pelo Facebook. Ele fornece uma experiência completa de testes, incluindo asserções, mocks, cobertura de código e muito mais.

* Documentação oficial: [Jest](https://jestjs.io/)

### Helmet

Helmet é uma biblioteca React para gerar e gerenciar tags HTML do cabeçalho. Ele é usado para configurar meta informações, como título da página, descrição e tags de cabeçalho de segurança.

* Documentação oficial: [Helmet](https://helmetjs.github.io/)

### React Router Dom

React Router Dom é uma biblioteca para roteamento em aplicações React. Ela permite criar rotas e navegar entre diferentes componentes React em uma aplicação de página única.

* Documentação oficial: [React Router Dom](https://reactrouter.com/)

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── public/             # Arquivos estáticos públicos
│   ├── index.html      # Página principal
│   └── ...
├── src/                # Código-fonte da aplicação
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas do site
│   ├── hooks/         # Estilos globais e estilização dos componentes
│   ├── App.js          # Componente raiz da aplicação
│   └── ...
├── tests/              # Testes da aplicação
│   └── ...
├── package.json        # Dependências e scripts
└── ...
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm start`

Inicia o servidor de desenvolvimento em modo de desenvolvimento.`<br>`
Abra [http://localhost:3000](http://localhost:3000/) para visualizar no navegador.

### `npm test`

Executa os testes da aplicação utilizando o framework Jest.

### `npm run build`

Compila a aplicação para produção na pasta `build`.

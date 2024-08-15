# P2P

<img src="./readme-hero.png" alt="Apresentação visual do funcionamento da Web 1, 2 e 3. Sendo a 1 varios pontos convergindo a um unico lugar, a 2 varios pontos convergindo a varios pontos especificos e a 3 varios pontos convergindo entre si.">

> Conexão peer to peer é uma conexão entre usuários e sem a necessidade de um servidor principal.

> Nesse projeto não estou utilizando nenhum protocólo especifico, fiz basicamente um servidor de eventos onde cada conexão é servidor e cliente, quando ele se conecta a um servidor, esse o cliente desse servidor se conecta ao servidor do cliente que se conectou.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas para as seguintes tarefas:

- [x] Criando um nó.
- [X] Conectando a um nó.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você precisa da versão `20.15.1` ou superior do `Node.js`
- Você precisa da versão `10.7.0` ou superior do `npm`

## 🚀 Instalando "p2p"

Para instalar o "p2p", siga estas etapas:

Linux e macOS:

```
$ npm install
$ PORT=<Porta desse nó> npm run dev <IP e porta que vai se conectar>
```

## ☕ Usando "p2p"

Não tem uma documentação mas você pode se conectar a um servidor enviando ele como argumento da aplicação e definir a porta que vai ser criada pelo ".env".

```
PORT=<.env> npm run dev <Argumento da aplicação>
```
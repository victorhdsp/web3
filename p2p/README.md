# Sistema p2p

O objetivo é criar um sistema de conexão p2p baseado na minha esquisofrenia e no entendimento que tive do funcionamento de um nas minhas pesquisas na internet.

## Funcionamento

Para o funcionamento do sistema pensei na seguinte coisa, todo nó conectado é um "servidor/cliente", e funciona da seguinte forma:

Você tem uma lista de ips, ao conectar com um outro nó você ganha a lista dele e salva ela em uma lista temporária ignorando os ips que você já tem conectado.

ex: Você e ele teriam respectivamente as listas f*["123", "124", "125"] e f*["223", "224", "125"], ao se conectarem sua lista ficaria t*["223", "224"].

Com essa lista temporária, seu nó vai testar cada um dos ips, caso consiga conexão então ele primeiramente adiciona o ip em uma lista de ips confirmados e obtem a lista dele, concatenando os ips a sua lista temporária e ignorando os ips que você já tem conectado ou que já estão la lista temporária.

ex: Você teria sua listas de fixos e temporários, você tentou conectado ao ip "223" e conseguiu conexão, ele por sua vez tinha os ips f*["123", "333", "224"], agora suas listas ficariam f*["123", "124", "125", "223"] e t*["224", "333"].

Caso a conexão não seja possível ele vai adicionar a uma terceira lista de ips inativos.

ex: Nesse caso vamos supor que "224" é um ip inativo, suas listas ficariam então f*["123", "124", "125", "223"], t*["333"], i*["224"].

Ao terminar todas as conexões possiveis pelos ips temporários e a lista estiver zerada, então ele vai avisar sobre os ips inativos através de um "evento de verificação de existencia", um evento nesse caso consiste em avisar a todos os ips na lista de fixos para fazer alguma coisa, nesse caso um "evento de verificação de existencia" seria pedir que verifiquem se o ip ainda existe e está ativo.

* Ao receber o pedido de verificação, ele vai verificar se tem esse ip na sua lista de fixos, caso sim ele vai fazer um teste para se conectar e se não conseguir conexão, então ele vai repassar o "evento de verificação de existencia".
* Caso ele consiga conexão ele vai avisar o nó que mandou a mensagem que ele conseguiu se conectar portanto aquela alteração não deve ser feita.

Seguindo a lógica dos eventos, o compartilhar uma informação é basicamente criar um evento avisando para que todos modifiquem a informação tambem.

* A informação modificada precisa ser previamente codada e seguir uma regra específica de modificação para verificar se essa alteração realmente deve ser feita.

## Outputs
/connect - Conectar a novos nós e obter a lista de nós conectados.
/insertBlock - Inserir um novo bloco na blockchain e propagar a informação para outros nós.
/getChain - Obter a cadeia de blocos atual de um nó.
/getPeers - Obter a lista de peers conectados a um nó específico.
/validateTransaction - Validar e inserir transações no pool de transações pendentes.
/broadcast - Propagar mensagens ou informações entre os nós conectados.
/getTransactions - Obter transações pendentes.
/mineBlock - Iniciar o processo de mineração em um nó.

## Funcionalidades
[] Conectar a um nó
[] Pegar lista de um nó
[] Remover um nó da lista
[] Sistema de criar eventos
[] Sistema de executar eventos
[] Evento: "Verificação de existencia"

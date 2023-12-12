# previsao-do-tempo-em-node

Este é um projeto que estou fazendo nas minhas horas vagas, fiz o front-end consumindo uma api de tempo da openweathermap para treinar.

O intuíto desse projeto é aplicar os conceitos de mobile first.

O projeto inicialmente está assim:

![image](https://github.com/SantanaRael/previsao-do-tempo-em-node/assets/73674173/52104862-7abe-4ac5-9221-4e42a0258ced)

mas quero estilizar o css dele para seguir o protótipo de interface que eu fiz:

![image](https://github.com/SantanaRael/previsao-do-tempo-em-node/assets/73674173/623c4f54-4d58-4584-88e5-4a17f8c876c7)


# Como rodar aplicação:

Clone o projeto:

# README

Este é um projeto Node.js que consiste em uma API e um script cliente. Siga as instruções abaixo para configurar e executar o projeto localmente.

## Como Rodar o Projeto

### 1. Clone o Projeto

```bash
git clone https://github.com/SantanaRael/previsao-do-tempo-em-node.git
cd previsao-do-tempo-em-node
```

### 2. Instale as Dependências

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute:

```bash
npm install
```

### 3. Configurar a API


Abra o site, faça login e adicione a chave da API fornecida:

`https://home.openweathermap.org/api_keys`


### 4. Rodar a API

Execute a API com:

```bash
node api/app.js
```

A API estará disponível em `http://localhost:3000/weather`.

### 5. Configurar o Cliente

Vá para a pasta `src` e abra o arquivo `script.js`. Adicione a chave da API fornecida onde necessário:

```javascript
const apiKey = 'SUA_CHAVE_DE_API_AQUI';
```

### 6. Rodar o Cliente

Na pasta `public` use um servidor ao vivo (como Live Server) para executar o script cliente:

```bash
npx live-server
```

O cliente estará disponível em `http://localhost:8080`.

Agora, você deve ter a API e o cliente configurados e em execução. Certifique-se de ter as dependências instaladas e as chaves da API configuradas corretamente para garantir o funcionamento adequado do projeto.

Para ver a variações de condição do tempo:

https://openweathermap.org/weather-conditions


Proximas atualizações:

Responsividade ->

Criar layout para tablet e PC

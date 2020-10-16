# Deninho

Repositório contendo o código do bot em execução no canal [@pachicodes][1].

# Executando

Para executar este projeto, você precisa do [NodeJS][2] instalado e um token de acesso para uma conta existente na Twitch. Pode-se utilizar sua própria conta para testes, mas o ideal é ter uma exclusiva para o bot.

Para obter o token, entre [neste serviço][3] e autorize-o a ter acesso a sua conta da Twitch. Guarde o token obtido em um local seguro. Com o token em mãos: clone este repositório, instale as dependências, defina as variáveis de ambiente e execute a aplicação:

```
git clone https://github.com/pachicodes/deninho-bot.git

cd ./deninho-bot
npm install

BOT_NAME=deninhobot         # nick do bot na twitch.
CHANNEL_NAME=pachicodes     # canal que irá escutar pelos comandos.
TOKEN=                      # token de acesso obtido anteriormente.

npm run dev

    Bot is running at irc-ws.chat.twitch.tv:80
```

# Docker
Você pode executar o **DeninhoBot** usando Docker e Docker Compose, para isso, siga os passos abaixo:
1. Faça o clone do projeto.
2. Configure as variáveis de ambiente.
3. No diretório raiz do projeto, digite `docker-compose up -d`. Isso vai fazer com que o Docker faça o build do container e coloque em background.

### Comandos úteis do docker-compose
- Se fizer mudanças no Dockerfile, execute `docker-compose build` antes do `docker-composer up -d`
- Se quiser ver os logs, no diretório raiz do projeto digite `docker-compose logs -f`
- Se quiser parar o bot, digite `docker-compose down`

# Contribuindo

- Crie uma branch a partir da `main`, exemplo: `git checkout -b minha-branch`.
- Faça o commit das suas alterações e envie um novo pull request tendo a branch `main` como destino.

## Criando novos comandos

Para criar um novo comando, você deve criar um novo arquivo Javascript dentro do diretório `src/commands` e exportar uma
função _default_ contendos os parametros seguintes:

```js
/**
 * @param client: é o cliente do bot, utilizado principalmente para enviar mensagens de volta a quem solicitou.
 * @param target: nome do usuário que disparou o comando (que enviou a mensagem), ex: #pachicodes.
 * @param context: contexto (esse objeto contém várias informações que podem ser utilizados para tomar uma ação, ver melhor na documentção do TMI.js).
 * @param message: o conteúdo mensagem enviada.
 */
exports.default = (client, target, context, message) => {
  // Conteúdo do seu comando :)
};
```

[1]: https://www.twitch.tv/pachicodes
[2]: https://nodejs.org/en/download/
[3]: https://twitchapps.com/tmi/

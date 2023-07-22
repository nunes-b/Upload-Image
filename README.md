# Api de Upload de Arquivos

projeto desenvolvido em Node.js utilizando o framework Express, Mongoose para integração com o MongoDB e Multer para gerenciamento do upload de arquivos. O objetivo desta API é permitir que os usuários realizem o envio de imagens para o servidor, armazenando seus metadados e permitindo a busca e exclusão das imagens cadastradas.

## Principais Funcionalidades

Upload de Imagem: Os usuários podem enviar imagens para o servidor através de uma requisição POST, contendo o arquivo e o nome da imagem.

Listagem de Imagens: É possível obter a lista de todas as imagens cadastradas no servidor, retornando os metadados de cada imagem.

Exclusão de Imagem: Os usuários podem remover imagens cadastradas no servidor através de uma requisição DELETE, fornecendo o ID da imagem a ser excluída.

## Endpoints

### Upload de Imagem

URL: /pictures
Método: POST
Parâmetros no Corpo (multipart/form-data):
name: Nome da imagem (string, obrigatório).
file: Arquivo de imagem (multipart/form-data, obrigatório).

Respostas:

200 OK: Imagem enviada e cadastrada com sucesso, retornando os metadados da imagem.

500 Internal Server Error: Erro ao salvar a imagem no servidor.

### Listagem de Imagens

URL: /pictures
Método: GET

Respostas:

200 OK: Retorna a lista de todas as imagens cadastradas no servidor, com seus respectivos metadados.

500 Internal Server Error: Erro ao buscar as imagens no servidor.

### Exclusão de Imagem

URL: /pictures/:id
Método: DELETE

Parâmetros na URL:
id: ID da imagem a ser excluída (string, obrigatório).

Respostas:

200 OK: Imagem removida com sucesso.

404 Not Found: Imagem não encontrada.

500 Internal Server Error: Erro ao remover a imagem do servidor.

## Instalação e Execução

Certifique-se de ter o Node.js instalado em sua máquina.

Faça o clone deste repositório e acesse o diretório raiz.

Instale as dependências necessárias executando o seguinte comando no terminal:

```npm install

```

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

```PORT=3000
DB_USER=seu_usuario_do_mongodb
DB_PASSWORD=sua_senha_do_mongodb
```

Inicie o servidor executando o comando:
`npm start`

O servidor estará rodando na porta especificada no arquivo `.env`

### Config Multer

O Multer foi configurado para armazenar as imagens enviadas na pasta "uploads/" do servidor. Os arquivos são renomeados com um timestamp para garantir que tenham nomes únicos.

## Importante

Este projeto se trata de um aprendizado e desenvolvimento em Node.js e Multer.

O projeto continuará sendo atualizado e mantido por mim e novas funcionalidades serão implementadas. Entre essas melhorias a integração do módulo "sharp" para permitir o redimensionamento das imagens enviadas mantendo o DPI e convertendo o formato das imagens em um bucket em cloud, Google cloud ou Aws, estou experimentando.

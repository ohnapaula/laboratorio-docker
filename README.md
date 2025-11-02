# 📌 Laboratório de Docker

## 🚀 Tecnologias Utilizadas

- **Express** (Backend)
- **PostgreSQL** (Banco de Dados)
- **Docker** (Containerização)

## 🔧 Configuração do Ambiente

Para iniciar a montagem do ambiente é necessário cumprir os pré-requisitos
### Pré-requisitos:
- [Docker](https://www.docker.com/) (versão 28.5.1 ou superior)

### Baixando o projeto
Após cumprir todos os pré-requisitos o próximo passo é baixar o projeto executando o seguinte comando no terminal:
```bash
   git clone https://github.com/ohnapaula/laboratorio-docker.git
```
#### 1. Definindo Variáveis de Ambiente
- Primeiro, crie um arquivo `.env` dentro do diretório `/laboratorio-docker` com as seguintes variáveis de ambiente:

   - POSTGRES_PASSWORD=`<senha_do_postgres>`
   - POSTGRES_USER=`<usuario_do_postgres>`
   - POSTGRES_DB=`<nome_do_banco_de_dados>`

**OBSERVAÇÃO**: Substitua `<senha_do_postgres>`, `<usuario_do_postgres>` e `<nome_do_banco_de_dados>` pelos valores desejados para sua configuração do banco de dados PostgreSQL.

#### 2. Rodando o Docker Compose
Dentro da pasta `laboratorio-docker` rode o seguinte comando no terminal:
```bash
docker compose up --build -d
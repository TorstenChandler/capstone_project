## Setup

create .env file
```env
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=db
POSTGRES_PORT=5432
#when running actions in docker 
#POSTGRES_HOST=database
#when running actions via fastapi locally
POSTGRES_HOST=localhost
HASURA_PORT=8080

HASURA_ADMIN_SECRET=myadminsecret
#ollama when running actions in docker 
#OLLAMA_HOST=host.docker.internal
#ollama when running actions via fastapi locally
OLLAMA_HOST=localhost
```

```sh 
docker compose build
docker compose up
```

## Architecture

![architecture](specs/Architecture.svg)

http://localhost:8080

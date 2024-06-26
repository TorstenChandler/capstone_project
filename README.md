## Setup

create .env file
```env
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=db
POSTGRES_PORT=5432
#when running actions in docker 
#POSTGRES_HOST=databaseDATABASE_HOST=database
DATABASE_INTERNAL_PORT=5432
DATABASE_PUBLIC_PORT=5433
DATABASE_USER=user
DATABASE_PASSWORD=password
DATABASE_NAME=db
OLLAMA_HOST=host.docker.internal
GRAPQHL_PORT=8080
GRAPQHL_SECRET=myadminsecret
```

```sh 
docker compose build
docker compose up
```

## Architecture

![architecture](specs/Architecture.svg)

http://localhost:8080

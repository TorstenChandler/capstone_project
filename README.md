## Setup

create .env file
```env
#DATABASE_HOST=database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_PUBLIC_PORT=5432
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
cd 
```

## Architecture

![architecture](specs/Architecture.svg)

http://localhost:8080

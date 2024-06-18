## Setup

create .env file
```env
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=db
POSTGRES_PORT=5432
HASURA_PORT=8080
HASURA_ADMIN_SECRET=myadminsecret
```

```sh 
docker compose build
docker compose up
```

## Architecture

![architecture](specs/Architecture.svg)

http://localhost:8080

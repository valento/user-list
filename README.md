# UserList

Created at AUG 19 07:27am


## Install
```shell
yarn install
```

## Spin a postgresql container:
```shell
docker run -d -p 5432:5432 --name pg-user-list -e POSTGRES_USER=valento -e POSTGRES_PASSWORD=V2@@1DB -e POSTGRES_DB=userListDB postgres

# Log into DB with psql-client
docker exec -it <containerID> psql -U valento -d userListDB
```
## Push Prisma User Model:
```shell
nx run prisma-schema:push:dev
```

## Generate Prisma Client (just one for public schema):
```shell
nx run prisma-schema:gen-client
```

## Run both apps (next-web and nest-api):
```shell
nx run-many --targets=serve
```
or

## Run separately:
```shell
# api
nx run api:serve

# web
nx run web:api
```

## Seed some data:
```shell
# this will curl a dozen of Users create route
bash ./seed.postgresql.sh
```

Ended as far as I could get by 11:something
App shouls be running
Only a few CRUD operations are finished
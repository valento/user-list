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
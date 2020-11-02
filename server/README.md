todo
==
- [ ] Add error reporting middleware
- [ ] Handle auth
- [x] Setup the table through migration
- [ ] ~~Add DB lib to server context~~
- [x] Change to graphQL
- [ ] Authenticate calls


## Commands

### `yarn knex migrate:make -x ts -esm <migration_name>`
Create a migration file

### `yarn knex migrate:latest`
Run the last migration

### `yarn knex migrate:down`
Tear the last migration


### `yarn knex seed:make <seed_name>`
Create a seed

## `yarn knex seed:run`
Run the last seed
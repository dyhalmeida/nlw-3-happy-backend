### Comando para gerar uma "migration"

```shell
yarn typeorm migration:create -n *migration_name

# Ex:
yarn typeorm migration:create -n create_orphanages
```

### Comando para reverter uma "migration"

```shell
yarn typeorm migration:revert
```

### Comando para executar as "migrations"

```shell
yarn typeorm migration:run
```

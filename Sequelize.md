
#### For creation of new database 
``` 
npx sequelize db:create
```

#### For creation of table
```
npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer 
```

#### For migration of table
```
npx sequelize db:migrate
```

#### To revert/undo previous migration
```
npx sequelize db:migrate:undo
```

##### To revert/undo all migrations
```
npx sequelize db:migrate:undo:all
```
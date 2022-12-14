import knex from 'knex'
import config from '../src/config.js'

// opciones SQL: mariaDb, sqlite3

crearTablasProductos(knex(config.sqlite3))
crearTablasCarritos(knex(config.sqlite3))

//------------------------------------------

async function crearTablasProductos(sqlClient) {
    try {
        const mariaDbClient = sqlClient
        
       await mariaDbClient.schema.dropTableIfExists('productos')
       await  mariaDbClient.schema.createTable('productos', table => {
            table.increments('id').primary();
            table.string('title', 15).notNullable;
            table.float('price').notNullable;
            table.string('thumbnail', 50);
        })
    
        console.log('tabla productos creada con éxito')
    
    } catch (error) {
        console.log('error al crear tabla productos ')
        console.log(error)
    }
    
}

//------------------------------------------

async function crearTablasCarritos(sqlClient) {
    try {
        const mariaDbClient = sqlClient
        
       await mariaDbClient.schema.dropTableIfExists('carritos')
       await  mariaDbClient.schema.createTable('carritos', table => {
            table.increments('id').primary();
            table.string('productos').notNullable;
        
        })
    
        console.log('tabla carritos creada con éxito')
    
    } catch (error) {
        console.log('error al crear tabla carritos ')
        console.log(error)
    }
    
}
    


import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            await this.coleccion.find({id : id});
        } catch (error) {
            
        }
    }

    async listarAll() {
        try {
          await this.coleccion.find({});
        } catch (error) {
            
        }
    }

    async guardar(nuevoElem) {
        try {
            await this.coleccion.create({nuevoElem})
        } catch (error) {
            
        }
    }

    async actualizar(nuevoElem,id) {
        try {
            await this.coleccion.updateOne({id : id},{$set: {nuevoElem}})
        } catch (error) {
            
        }
    }

    async borrar(id) {
        try {
            await this.coleccion.deleteOne({id : id});
        } catch (error) {
            
        }
    }

    async borrarAll() {
        try {
            await this.coleccion.deleteMany({ });
        } catch (error) {
            
        }
    }
}

export default ContenedorMongoDb
const {logger} = require("../config")

class CrudRepository {
  constructor(model) {
    this.model = model;
  }


  async create(data) {
    try{
        const response = await this.model.create(data);
    }catch(err){
        logger.error('something went wrong in crud repo: ', err);
        throw err;
    }
  }

  async destroy(data) {
    try{
        const response = await this.model.destroy({
            where:{
                id : data
            }
        });
    }catch(err){
        logger.error('something went wrong in crud repo: ', err);
        throw err;
    }
  }

  async get(data) {
    try{
        const response = await this.model.findBypk(data);
        return response;
    }catch(err){
        logger.error('something went wrong in crud repo: ', err);
        throw err;
    }
  }

   async getAll() {
    try{
        const response = await this.model.findByAll();
        return response;
    }catch(err){
        logger.error('something went wrong in crud repo: ', err);
        throw err;
    }
  }

  async update(id,data) {
    try{
        const response = await this.model.update(data,{
            where: {
            id:id, 
            }
        });
        return response;
    }catch(err){
        logger.error('something went wrong in crud repo: ', err);
        throw err;
    }
  }
}


module.exports = CrudRepository;
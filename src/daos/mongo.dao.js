
export default class MongoDao {

  constructor(collection) {
    this.collection = collection;
  }

  async create(documentToCreate) {

    try {
      const createdDocument = await this.collection.create(documentToCreate);
      return createdDocument;

    } catch (error) {

      console.log("Error creating document", error);
    }
  };

  async update(filter, updateData) {

    try {

      const updatedDocument = await this.collection.updateOne(filter, updateData);
      console.log(updatedDocument);
      return updatedDocument;

    } catch (error) {

      console.log("Error updating document", error);
    }
  };

  async getAll() {

    try {

      const allDocuments = await this.collection.find();
      return allDocuments;

    } catch (error) {

      console.log("Error getting all documents", error);
    }
  };

  async getById(id) {

    try {

      const document = await this.collection.findById(id);
      return document;

    } catch (error) {

      console.log("Error getting document by id", error);
    }
  };

  async getByFilter(filters) {

    try {

      const document = await this.collection.findOne(filters).lean();
      return document;

    } catch (error) {

      console.log("Error getting document by filters", error);
    }
  };

  async delete(id) {

    try {

      const deletedDocument = await this.collection.deleteOne(id);
      return deletedDocument;

    } catch (error) {

      console.log("Error creating document", error);
    }
  };
};

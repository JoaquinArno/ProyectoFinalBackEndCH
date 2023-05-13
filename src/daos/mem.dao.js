
export default class MemDao {

  constructor(collection) {
    this.collection = [];
  }

  async create(documentToCreate) {

    try {

      const createdDocument = this.collection.push(documentToCreate);
      return createdDocument;

    } catch (error) {

      console.log("Error creating document", error);
    }
  };

  async update(filter, updateData) {

    try {

      newCollection = this.collection.filter(item => item !== filter);
      newCollection.push(updateData);

    } catch (error) {

      console.log("Error updateing document", error);
    }
  };

  async getAll() {

    try {

      const allDocuments = this.collection;
      return allDocuments;

    } catch (error) {

      console.log("Error getting all documents", error);
    }
  };

  async getById(id) {

    try {

      const document = this.collection.filter(item => item._id === id);
      return document;

    } catch (error) {

      console.log("Error getting document by id", error);
    }
  };

  async getByFilter(filters) {

    try {

      const document = this.collection.filter(item => item === filters);
      return document;

    } catch (error) {

      console.log("Error getting document by filters", error);
    }
  };

  async delete(id) {

    try {

      const deletedDocument = this.collection.filter(item => item._id !== id);
      return deletedDocument;

    } catch (error) {

      console.log("Error creating document", error);
    }
  };
};

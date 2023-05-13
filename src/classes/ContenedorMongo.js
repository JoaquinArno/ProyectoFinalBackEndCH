
class ContenedorMongo {
    
    constructor(model) {
        this.model = model;
    };

    async getAll() {

        try {
            const response = await this.model.find().lean();
            return response;

        } catch (error) {
            throw new Error("Error getting resources");
        }
    };

    async getById(id) {

        try {
            const response = await this.model.findById(id);
            return response;

        } catch (error) {
            console.log("Error getting resources");
        }
    };

    async save(resource) {

        try {
            const response = await this.model.create(resource);
            return response;

        } catch (error) {
            console.log(error);
        }
    };

    async update(id, resource) {
        try {
            const response = await this.model.findByIdAndUpdate(id, resource);
            return response;

        } catch (error) {
            throw new Error("Error getting resources");
        }
    };

    async delete(id) {

        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;

        } catch (error) {
            throw new Error("Error getting resources");
        }
    };
};

export default ContenedorMongo;
import knex from "knex";

class Contenedor {

    constructor(config, table) {
        this.database = knex(config);
        this.table = table;
    };

    async save(document) {

        try {

            await this.database(this.table).insert(document);
            console.log("product added");

        } catch (error) {

            console.log(error);
            this.dataBase.destroy();
        }
    };

    async replace(id, document) {

        try {

            const response = await this.database(this.table)
                .where({ id })
                .update(document);
            return response;

        } catch (error) {

            throw new Error(`document not found`);
        }
    };

    async getById(id) {

        try {

            const response = await this.database
                .from(this.table)
                .select("*")
                .where({ id });
            return response;

        } catch (error) {

            throw new Error(`Could not find document with id: ${error}`);
        }
    };

    async getAll() {

        try {
            const response = await this.database.from(this.table).select("*");
            return response;

        } catch {
            return { error: "Product not found" };
        }
    };

    async deleteById(id) {

        try {
            await this.database(this.table).del().where({ id });
            console.log('product deleted');

        } catch (error) {
            throw new Error(`Error erasing data: ${err}`);
        }
    };

    async deleteAll() {

        try {
            await this.database(this.table).del();

        } catch (error) {
            throw new Error(`Error writing data: ${err}`);
        }
    };
};


export default Contenedor;
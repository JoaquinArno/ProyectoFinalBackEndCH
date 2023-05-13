import * as url from "url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url))
const __filename = url.fileURLToPath(import.meta.url);


const mySqliteConfig = {

    client: "sqlite3",
    connection: { filename: path.resolve(__dirname, "../data/mydb.sqlite") },
    useNullAsDefault: true,
};

export default mySqliteConfig;
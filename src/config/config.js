import dotenv from "dotenv";

dotenv.config();

const configParams = {

    port: process.env.PORT,
    host: process.env.HOST,
    mail: process.env.ADMIN_MAIL,
    dbUrl: process.env.MONGODB_URL,
    db: process.argv[2],
    sessionTime: process.env.SESSION_TIME,
};

export default configParams;
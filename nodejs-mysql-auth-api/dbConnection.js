import mysql from 'mysql2';
import { config } from 'dotenv';

const connection = () => {
    config();
    const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    return mysql.createPool({
        host: DB_HOST,
        port: parseInt(DB_PORT), // Convert port to an integer
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    });
};

export default connection().promise();

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contactRoutes.js';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';  

dotenv.config();

const app = express();
app.use(express.json());
const Port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.join(__dirname, "contacts.db");
let db = null;


const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        await db.run(`CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone_number TEXT NOT NULL,
            address TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

        app.listen(Port, () => {
            console.log(`Server is running on http://localhost:${Port}/api/contacts`);
        });

    } catch (error) {
        console.error(`DB initialization error: ${error.message}`);
        process.exit(1);
    }
};

app.use(bodyParser.json());
app.use('/api', contactRoutes);

initializeDBAndServer()

export const getDB = () => db

export default db;
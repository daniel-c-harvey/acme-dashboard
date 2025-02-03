import 'dotenv/config';
import postgres from 'postgres';

// all components using sql are dynamic
export const dynamic = 'force-dynamic';

// Ensure required environment variables are present
if (!process.env.POSTGRES_USER || 
    !process.env.POSTGRES_HOST || 
    !process.env.POSTGRES_PASSWORD || 
    !process.env.POSTGRES_DATABASE) {
    throw new Error('Missing required database environment variables');
}

const sql = postgres({
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: 'prefer'
});

export default sql;
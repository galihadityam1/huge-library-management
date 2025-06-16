import { drizzle } from 'drizzle-orm/neon-http';
import config from '@/lib/config';
import { neon } from '@neondatabase/serverless';

const { env: { databaseUrl } } = config;

const sql = neon(databaseUrl);
const db = drizzle({ client: sql, casing: 'snake_case' });

export default db;
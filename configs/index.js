import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:npg_KJivwg6FXec9@ep-empty-snowflake-a1rs3za5-pooler.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require&channel_binding=require');
export const db = drizzle(sql,{schema});
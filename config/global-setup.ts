import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const env =
{
    baseurl: process.env.BASEURL!,
    username: process.env.USER_NAME!,
    password: process.env.USER_PASSWORD!
}
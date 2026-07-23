import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, `../${process.env.ENV?.trim()}.env`);
console.log(`Env path :- ${envPath}`);
const result = dotenv.config({
    path: envPath
});

export const ENV =
{
    BASEURL: process.env.BASEURL!,
    USERNAME: process.env.USER_NAME!,
    PASSWORD: process.env.USER_PASSWORD!
}
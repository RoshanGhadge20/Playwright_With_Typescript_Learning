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
    BASEURL_LOGINPAGE: process.env.BASEURL_LOGINPAGE!,
    USERNAME: process.env.USER_NAME!,
    PASSWORD: process.env.USER_PASSWORD!,
    BASEURL_HOMEPAGE: process.env.BASEURL_HOMEPAGE!,
    BASEURL_PLAYWRIGHTPAGE: process.env.BASEURL_PLAYWRIGHT!,
}
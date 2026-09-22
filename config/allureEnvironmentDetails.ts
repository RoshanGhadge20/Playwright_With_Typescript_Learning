import * as fs from 'fs';
import * as path from 'path';

export function allureEnvironmentDetails(): void {
    const envInfo: Record<string, string> = {
        Environment: process.env.ENV || 'test',
        Browser: 'Chrome',
        OS: process.platform,
        'Base.URL': process.env.BASE_URL || 'N/A',
        'Node.Version': process.version,
    };

    const lines = Object.entries(envInfo)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');

    const resultsDir = path.resolve('allure-results');
    if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir, { recursive: true });
    }

    fs.writeFileSync(path.join(resultsDir, 'environment.properties'), lines);
}
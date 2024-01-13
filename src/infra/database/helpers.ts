import * as fs from 'fs';
import * as url from 'url';
import * as path from 'path';

export function getTables(): string[] {
  const filePath = url.fileURLToPath(import.meta.url);
  const tablesDir = path.join(filePath, '..', '/tables');
  const fileNames = fs.readdirSync(tablesDir, 'utf-8');
  return fileNames.map(f => fs.readFileSync(path.join(tablesDir, f), 'utf-8'));
}

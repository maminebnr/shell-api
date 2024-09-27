import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as path from 'path';

@Injectable()
export class ShellExecutionService {
  executeShellScript(): Promise<string> {
    // Use process.cwd() to get the root directory of the project
    const scriptPath = path.resolve(process.cwd(), 'dist/scripts/my-script.sh'); // Ensure the path is absolute
    return new Promise((resolve, reject) => {
      exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${stderr}`);
        }
        resolve(stdout);
      });
    });
  }
}

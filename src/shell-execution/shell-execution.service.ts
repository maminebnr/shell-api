import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as path from 'path';

@Injectable()
export class ShellExecutionService {
  executeShellScript(): Promise<string> {
    const scriptPath = path.resolve(__dirname, './scripts/my-script.sh'); // Path relative to 'dist'
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

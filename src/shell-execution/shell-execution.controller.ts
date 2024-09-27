import { Controller, Get } from '@nestjs/common';
import { ShellExecutionService } from './shell-execution.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Shell Execution')
@Controller('shell')
export class ShellExecutionController {
  constructor(private readonly shellService: ShellExecutionService) {}

  @Get()
  @ApiOperation({ summary: 'Execute a shell script' })
  @ApiResponse({ status: 200, description: 'The output of the shell script.' })
  @ApiResponse({ status: 500, description: 'Shell script execution error.' })
  async executeScript(): Promise<string> {
    try {
      const result = await this.shellService.executeShellScript();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}

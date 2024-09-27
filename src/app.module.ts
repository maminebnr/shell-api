import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShellExecutionService } from './shell-execution/shell-execution.service';
import { ShellExecutionController } from './shell-execution/shell-execution.controller';

@Module({
  imports: [],
  controllers: [AppController, ShellExecutionController],
  providers: [AppService, ShellExecutionService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { TicketsModule } from './tickets/tickets.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

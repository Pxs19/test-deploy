import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './libs/prisma/prisma.module';
import { RepositoryModule } from './libs/repository/repository.module';

@Module({
  imports: [PrismaModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

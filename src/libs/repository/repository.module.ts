import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TestRepository } from './test-repo/test.repository';

const service = [
   TestRepository
  ];

  
@Module({

    imports: [PrismaModule],
    providers: service,
    exports: service,

})
export class RepositoryModule {}

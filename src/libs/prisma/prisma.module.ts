import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

const services = [PrismaService];

@Module({
  providers: services,
  exports: services,
})
export class PrismaModule {}

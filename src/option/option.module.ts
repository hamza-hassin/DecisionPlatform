import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OptionController],
  providers: [OptionService],
})
export class OptionModule {}

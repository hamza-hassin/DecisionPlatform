import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProposalModule } from './proposal/proposal.module';
import { OptionModule } from './option/option.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    UsersModule,
    PrismaModule,
    AuthModule,
    ProposalModule,
    OptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

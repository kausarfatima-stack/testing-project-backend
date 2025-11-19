import { Module } from '@nestjs/common';
import { BugController } from './bug.controller';
import { BugService } from './bug.service';
import { ProjectModule } from 'src/project/project.module';
import { UserModule } from 'src/user/user.module';
import { Bug } from 'src/entities/bug.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BugController],
  providers: [BugService],
  imports: [ProjectModule, UserModule, TypeOrmModule.forFeature([Bug])],
})
export class BugModule {}

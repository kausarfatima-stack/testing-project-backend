import { Module } from '@nestjs/common';
import { BugController } from './bug.controller';
import { BugService } from './bug.service';
import { ProjectService } from 'src/project/project.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [BugController],
  providers: [BugService],
  imports: [ProjectService, UserService],
})
export class BugModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';
import { BugModule } from './bug/bug.module';
import { BugController } from './bug/bug.controller';
import { UserService } from './user/user.service';
import { BugService } from './bug/bug.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'NewPassword123',
      username: 'postgres',
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ProjectModule,
    BugModule,
  ],
  controllers: [AppController, UserController, ProjectController, BugController],
  providers: [AppService, ProjectService, UserService, BugService],
})
export class AppModule {}

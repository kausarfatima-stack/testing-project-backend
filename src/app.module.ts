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
import { User } from './entities/user.entity';
import { Project } from './entities/project.entity';
import { Bug } from './entities/bug.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'NewPassword123',
      username: 'postgres',
      database: 'postgres',
      entities: [User, Project, Bug],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ProjectModule,
    BugModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

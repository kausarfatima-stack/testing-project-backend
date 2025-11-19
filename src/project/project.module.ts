import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from 'src/entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [UserModule, TypeOrmModule.forFeature([Project])],
    providers: [ProjectService],
    exports: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectModule {}

import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
    imports: [UserModule],
    providers: [ProjectService],
    exports: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectModule {}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from 'src/dto/dto';
import { Project } from 'src/entities/project.entity';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Post()
    async createProject(@Body() projectDto: ProjectDto): Promise<Project>{
        return this.projectService.createProject(projectDto);
    }

    @Get("currentProject/:id")
    async currentProject(@Param('id') id: number): Promise<Project | null>{
        return this.projectService.getProjectById(id);
    }

    @Get("userProjects/:email")
    async userProjects(@Param('email') email: string): Promise<Project[]>{
        return this.projectService.getProjectByCreatorEmail(email);
    }

    @Get()
    async getProjects(): Promise<Project[]>{
        return this.projectService.getProjects();
    }
}

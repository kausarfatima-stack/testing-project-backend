import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDto } from 'src/dto/dto';
import { Project } from 'src/entities/project.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project) private readonly projectRepository: Repository<Project>,
        private readonly userService: UserService
    ) { }

    async createProject(projectDto: ProjectDto): Promise<Project> {
        const user = await this.userService.getUserByEmail(projectDto.createdBy)
        const project = this.projectRepository.create({
            name: projectDto.name,
            desc: projectDto.desc,
            createdBy: user
        });
        return await this.projectRepository.save(project);
    }

    async getProjectById(id: number): Promise<Project>{
        const project = await this.projectRepository.findOneBy({id: id});
        if (!project) throw new NotFoundException('Project not found');
        
        return project;
    }

    async getProjectByCreatorEmail(email: string): Promise<Project[]>{
        const projects = await this.projectRepository.find({
            relations: ['createdBy']
        });
        return projects.filter(project => project.createdBy?.email === email);
    }

    async getProjects(): Promise<Project[]> {
        const projects = await this.projectRepository.find();
        return projects;
    }
}

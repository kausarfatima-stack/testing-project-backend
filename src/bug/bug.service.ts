import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BugDto } from 'src/dto/dto';
import { Bug } from 'src/entities/bug.entity';
import { ProjectService } from 'src/project/project.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class BugService {
    constructor(
        @InjectRepository(Bug) private readonly bugRepository: Repository<Bug>,
        private readonly projectService: ProjectService,
        private readonly userService: UserService
    ){}

    async createBug(bugDto: BugDto): Promise<Bug>{
        const creator = await this.userService.getUserById(bugDto.creator)
        const resolver = await this.userService.getUserById(bugDto.resolver)
        const project = await this.projectService.getProjectById(bugDto.project)

        const bug = this.bugRepository.create({
            title: bugDto.title,
            desc: bugDto.desc,
            deadline: bugDto.deadline,
            screenShot: bugDto.screenshot,
            type: bugDto.type,
            status: bugDto.status,
            creator: creator,
            resolver: resolver,
            project: project
        });
        return bug;
    }

    async ExtractBugByPid(pId: number): Promise<Bug[]>{
        const bugs = await this.bugRepository.find({
            relations: ['project']
        });
        return bugs.filter(bug => bug.project?.id === pId);
    }

    async ExtractBugByResolver(dId: number): Promise<Bug[]>{
        const bugs = await this.bugRepository.find({
            relations: ['resolver']
        });    
        return bugs.filter(bug => bug.resolver?.id === dId)
    }

    async ExtractBugByCreator(rId: number): Promise<Bug[]>{
        const bugs = await this.bugRepository.find({
            relations: ['creator']
        });    
        return bugs.filter(bug => bug.creator?.id === rId)
    }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BugService } from './bug.service';
import { BugDto } from 'src/dto/dto';
import { Bug } from 'src/entities/bug.entity';

@Controller('bug')
export class BugController {
    constructor(private readonly bugService: BugService){}

    @Post()
    async createBug(@Body() bugDto: BugDto ): Promise<Bug>{
        return this.bugService.createBug(bugDto);
    }

    @Get("currentProjectBug/:pId")
    async ExtractBugByP(@Param('pId') pId: number){
        return this.bugService.ExtractBugByPid(pId);
    }

    @Get("BugCreator/:dId")
    async ExtractBugByD(@Param('dId') dId: number){
        return this.bugService.ExtractBugByCreator(dId);
    }

    @Get("BugResolver/:rId")
    async ExtractBugByR(@Param('rId') rId: number){
        return this.bugService.ExtractBugByResolver(rId);
    }

}

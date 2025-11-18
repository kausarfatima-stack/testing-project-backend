import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ProjectDto, UserDto } from 'src/dto/dto';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async signUp(@Body() userDto: UserDto): Promise<User>{
        return this.userService.createUser(userDto);
    }

    @Get('findByEmail/:email')
    async getUser(@Param('email') email: string): Promise<User>{
        return this.userService.getUserByEmail(email);
    }

    @Get()
    async getUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }
}

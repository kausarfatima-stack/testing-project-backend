import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ){}

    async createUser(userDto: UserDto): Promise<User>{
        const user = this.userRepository.create(userDto);
        return await this.userRepository.save(user);
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async getAllUsers(): Promise<User[]>{
        return await this.userRepository.find();
    }
}

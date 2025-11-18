import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Bug } from './bug.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;

    @ManyToMany(() => User, user => user.projects)
    users: User[];

    @ManyToOne(() => User, user => user.id)
    createdBy: User;

    @OneToMany(() => Bug, bug => bug.project)
    Bugresolvers: Bug[];
}
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Project } from './project.entity';

@Entity()
export class Bug {
   @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    screenShot: File;

    @Column()
    deadline: string;

    @ManyToOne(() => User, user => user.id)
    creator: User

    @ManyToOne(() => User, user => user.id)
    resolver: User

    @ManyToOne(() =>Project, project => project.id)
    project: Project
}

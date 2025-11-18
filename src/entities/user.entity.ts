import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { Bug } from './bug.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @ManyToMany(() => Project, project => project.users)
  @JoinTable()
  projects: Project[];

  @OneToMany(() => Project, project => project.createdBy)
  createdProjects: Project[];

  @OneToMany(() => Bug, bug => bug.creator)
  Bugcreators: Bug[];

  @OneToMany(() => Bug, bug => bug.resolver)
  Bugresolvers: Bug[];
}
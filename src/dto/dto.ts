export class UserDto {
    username: string;
    email: string;
    password: string;
    role: string
}

export class ProjectDto {
    name: string;
    desc: string;
    createdBy: string
}

export class BugDto {
    title: string;
    desc: string;
    deadline: string;
    screenshot: File;
    type: string;
    status: string;
    creator: number;
    resolver: number;
    project: number
}
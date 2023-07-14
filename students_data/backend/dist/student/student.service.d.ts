import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(studentData: Partial<Student>): Promise<Student>;
    findAll(): Promise<Student[]>;
    findByRollNumber(rollNumber: string): Promise<Student>;
}

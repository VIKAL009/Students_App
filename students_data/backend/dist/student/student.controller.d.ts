import { StudentService } from './student.service';
import { Student } from './student.entity';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    create(studentData: Partial<Student>): Promise<Student>;
    findAll(): Promise<Student[]>;
    findByRollNumber(rollNumber: string): Promise<Student>;
}

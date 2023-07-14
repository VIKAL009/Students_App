import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';



@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Partial<Student>): Promise<Student> {
    return await this.studentService.create(studentData);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return await this.studentService.findAll();
  }

  @Get(':rollNumber')
  async findByRollNumber(@Param('rollNumber') rollNumber: string): Promise<Student> {
    return await this.studentService.findByRollNumber(rollNumber);
  }
}

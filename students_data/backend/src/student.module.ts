import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import databaseConfig from './config/database.config';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

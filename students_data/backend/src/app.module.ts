import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    StudentModule,
  ],
})
export class AppModule {}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rollNumber: string;

  @Column()
  name: string;

  @Column()
  age: number;
}



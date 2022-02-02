import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public label: string;

  @Column()
  public done: boolean;

  public constructor(label: string) {
    this.label = label;
    this.done = false;
  }
}
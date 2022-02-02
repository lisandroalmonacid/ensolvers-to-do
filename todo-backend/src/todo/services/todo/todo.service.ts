import { isNullOrUndefined } from 'util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo';
import { AddTodoDto } from '../../dto/add-todo-dto';
import { TodoDto } from '../../dto/todo-dto';
import { EditTodoDto } from '../../dto/edit-todo-dto';
import { TodoMapperService } from '../todo-mapper/todo-mapper.service';

@Injectable()
export class TodoService {

  public constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private readonly todoMapper: TodoMapperService
  ) {}

  public async findAll(): Promise<TodoDto[]> {
    const todos = await this.todoRepository.find();
    return todos.map(this.todoMapper.modelToDto);
  }

  public async findOne(id: number): Promise<TodoDto> {
    const todo = await this.todoRepository.findOne(id);
    if (isNullOrUndefined(todo)) throw new NotFoundException();
    return this.todoMapper.modelToDto(todo);
  }


  public async add({ label }: AddTodoDto): Promise<TodoDto> {
    let todo = new Todo(label);
    todo = await this.todoRepository.save(todo);
    return this.todoMapper.modelToDto(todo);
  }

  public async edit(id: number, { label, done }: EditTodoDto): Promise<TodoDto> {
    let todo = await this.todoRepository.findOne(id);

    if (isNullOrUndefined(todo)) throw new NotFoundException();

    todo.done= done;
    todo.label = label;

    todo = await this.todoRepository.save(todo);

    return this.todoMapper.modelToDto(todo);
  }

  public async remove(id: number): Promise<Todo> {
    let todo = await this.todoRepository.findOne(id);

    if (isNullOrUndefined(todo)) throw new NotFoundException();

    todo = await this.todoRepository.remove(todo);

    return todo;
  }

}

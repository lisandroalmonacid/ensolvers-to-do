import { Repository } from 'typeorm';
import { Todo } from '../../entities/todo';
import { AddTodoDto } from '../../dto/add-todo-dto';
import { TodoDto } from '../../dto/todo-dto';
import { EditTodoDto } from '../../dto/edit-todo-dto';
import { TodoMapperService } from '../todo-mapper/todo-mapper.service';
export declare class TodoService {
    private readonly todoRepository;
    private readonly todoMapper;
    constructor(todoRepository: Repository<Todo>, todoMapper: TodoMapperService);
    findAll(): Promise<TodoDto[]>;
    findOne(id: number): Promise<TodoDto>;
    add({ label }: AddTodoDto): Promise<TodoDto>;
    edit(id: number, { label, done }: EditTodoDto): Promise<TodoDto>;
    remove(id: number): Promise<Todo>;
}

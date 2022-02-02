import { TodoService } from './../../services/todo/todo.service';
import { AddTodoDto } from '../../dto/add-todo-dto';
import { TodoDto } from '../../dto/todo-dto';
import { EditTodoDto } from '../../dto/edit-todo-dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<TodoDto[]>;
    findOne(id: number): Promise<TodoDto>;
    edit(id: number, todo: EditTodoDto): Promise<TodoDto>;
    add(todo: AddTodoDto): Promise<TodoDto>;
    remove(id: number): Promise<TodoDto>;
}

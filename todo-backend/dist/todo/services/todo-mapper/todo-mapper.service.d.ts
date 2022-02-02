import { Todo } from '../../entities/todo';
import { TodoDto } from '../../dto/todo-dto';
export declare class TodoMapperService {
    modelToDto({ id, label, done }: Todo): TodoDto;
}

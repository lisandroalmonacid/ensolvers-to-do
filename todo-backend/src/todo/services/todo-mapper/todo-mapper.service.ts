import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities/todo';
import { TodoDto } from '../../dto/todo-dto';

@Injectable()
export class TodoMapperService {

  public modelToDto({ id, label, done }: Todo): TodoDto {
    return new TodoDto({ id, label, done });
  }

}
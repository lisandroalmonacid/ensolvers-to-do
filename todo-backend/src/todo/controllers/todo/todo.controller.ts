import { TodoService } from './../../services/todo/todo.service';
import { AddTodoDto } from '../../dto/add-todo-dto';
import { TodoDto } from '../../dto/todo-dto';
import { EditTodoDto } from '../../dto/edit-todo-dto';

import {
  Controller, 
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete
} from '@nestjs/common';


@Controller('todo/')
export class TodoController {

  public constructor(private readonly todoService: TodoService) {}

  @Get()
  public findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.findOne(id);
  }

  @Put(':id')
  public edit(@Param('id') id: number, @Body() todo: EditTodoDto): Promise<TodoDto> {
      return this.todoService.edit(id, todo);
  }

  @Post()
  public add(@Body() todo: AddTodoDto): Promise<TodoDto> {
      return this.todoService.add(todo);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.remove(id);
  }

}
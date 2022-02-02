import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class EditTodoDto {

  @IsString()
  @IsNotEmpty()
  public readonly label: string;

  @IsBoolean()
  public readonly done: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}
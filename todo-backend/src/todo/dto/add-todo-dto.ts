export class AddTodoDto {

    public readonly label: string;
    public readonly id: number;
  
    public constructor(opts?: Partial<AddTodoDto>) {
      Object.assign(this, opts);
    }
  
  }
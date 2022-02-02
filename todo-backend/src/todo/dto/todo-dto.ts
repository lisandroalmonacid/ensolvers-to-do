export class TodoDto {

    public readonly id: number;
    public readonly label: string;
    public readonly done: boolean;
  
    public constructor(opts?: Partial<TodoDto>) {
      Object.assign(this, opts);
    }
  
  }
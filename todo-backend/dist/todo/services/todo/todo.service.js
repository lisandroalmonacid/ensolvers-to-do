"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const util_1 = require("util");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const todo_1 = require("../../entities/todo");
const todo_mapper_service_1 = require("../todo-mapper/todo-mapper.service");
let TodoService = class TodoService {
    constructor(todoRepository, todoMapper) {
        this.todoRepository = todoRepository;
        this.todoMapper = todoMapper;
    }
    async findAll() {
        const todos = await this.todoRepository.find();
        return todos.map(this.todoMapper.modelToDto);
    }
    async findOne(id) {
        const todo = await this.todoRepository.findOne(id);
        if ((0, util_1.isNullOrUndefined)(todo))
            throw new common_1.NotFoundException();
        return this.todoMapper.modelToDto(todo);
    }
    async add({ label }) {
        let todo = new todo_1.Todo(label);
        todo = await this.todoRepository.save(todo);
        return this.todoMapper.modelToDto(todo);
    }
    async edit(id, { label, done }) {
        let todo = await this.todoRepository.findOne(id);
        if ((0, util_1.isNullOrUndefined)(todo))
            throw new common_1.NotFoundException();
        todo.done = done;
        todo.label = label;
        todo = await this.todoRepository.save(todo);
        return this.todoMapper.modelToDto(todo);
    }
    async remove(id) {
        let todo = await this.todoRepository.findOne(id);
        if ((0, util_1.isNullOrUndefined)(todo))
            throw new common_1.NotFoundException();
        todo = await this.todoRepository.remove(todo);
        return todo;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todo_1.Todo)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        todo_mapper_service_1.TodoMapperService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map
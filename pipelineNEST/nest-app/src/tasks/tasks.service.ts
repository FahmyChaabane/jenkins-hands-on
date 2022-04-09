import { User } from './../auth/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) // to tell Nest that inside typeorm we have a TaskRepository to inject here
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: getTasksFilterDto, user: User): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterDto, user);
  }

  async getTaskById(id: number, user: User): Promise<Task> {
    // any asynchronous operation is expected to return a promise not just a plain value, it must be a promise, otherwise TS will complain
    const found = await this.taskRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: number, user): Promise<void> {
    /* Promise<Task> would be the returned value
    const found = await this.getTaskById(id);
    return await this.taskRepository.remove(found);
    */
    const result = await this.taskRepository.delete({ id, userId: user.id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async UpdateTask(id: number, status: TaskStatus, user: User): Promise<Task> {
    /* Promise<void> would be the returned value
    const result = await this.taskRepository.update(id, { status });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    */
    const found = await this.getTaskById(id, user);
    found.status = status;
    await found.save();
    return found;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../Schema/employees.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employesModel: Model<Employee>,
  ) {}

  async registerEmployee(employee: Employee) {
    const createEmployee = new this.employesModel(employee);
    return await createEmployee.save();
  }

  async getAllEmployees() {
    return await this.employesModel.find().exec();
  }

  async getByIdEmployee(id: string) {
    return await this.employesModel.findById(id).exec();
  }

  async updateEmloyee(id: string, employee: Employee) {
    return await this.employesModel.findByIdAndUpdate({_id: id}, employee).exec();
  }

  async deleteEmployee(id: string) {
    return await this.employesModel.findOneAndDelete({_id: id}).exec();
  }
}

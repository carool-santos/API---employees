import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeSchema } from '../Schema/employees.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('employees')
    private readonly employesModel: Model<EmployeeSchema>,
  ) {}

  async registerEmployee(employee: EmployeeSchema) {
    const createdEmployee = new this.employesModel(employee);
    return await createdEmployee.save();
  }

  async getAllEmployees() {
    return await this.employesModel.find().exec();
  }

  async getByIdEmployee(id: string) {
    return await this.employesModel.findById(id).exec();
  }

  async updateEmloyee(id: string, employee: EmployeeSchema) {
    return await this.employesModel.findByIdAndUpdate({_id: id}, employee).exec();
  }

  async deleteEmployee(id: string) {
    return await this.employesModel.findOneAndDelete({_id: id}).exec();
  }
}

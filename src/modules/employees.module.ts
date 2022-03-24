import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesController } from '../controllers/employees.controller';
import { EmployeeSchema } from '../Schema/employees.schema';
import { EmployeeService } from '../services/employees.service';

@Module({
  imports: [
      MongooseModule.forFeature([{
        name: 'Employee',
        schema: EmployeeSchema
      }])
  ],
  controllers: [EmployeesController],
  providers: [EmployeeService],
})
export class AppModule {}

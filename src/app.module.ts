import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import {  EmployeeService } from './services/employees.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.qhklb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [EmployeesController],
  providers: [EmployeeService],
})
export class AppModule {}

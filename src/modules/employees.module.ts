import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from 'src/app.service';
import { EmployeesController } from 'src/controllers/employees.controller';
import { employeeSchema } from 'src/Schema/employees.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{
        name: 'Employee',
        schema: employeeSchema
      }])
  ],
  controllers: [EmployeesController],
  providers: [AppService],
})
export class AppModule {}

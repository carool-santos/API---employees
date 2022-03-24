import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Employee } from '../Schema/employees.schema';
import { EmployeeService } from '../services/employees.service';

@ApiTags('Employess')
@Controller('Employee')

export class EmployeesController {
  constructor(
    private readonly employeeService: EmployeeService,) {}

    @Post()
    async createEmployee(@Body() employee: Employee): Promise<Employee>{
      return this.employeeService.registerEmployee(employee)
    }

    @Get(':id')
    async getByIdEmployee(
      @Param('id') id: string) :Promise<Employee>{
        return this.employeeService.getByIdEmployee(id);
    }


    @Get()
    async getAllEmployees(): Promise<Employee[]>{
      return this.employeeService.getAllEmployees();
    }

    @Put('id')
    async updateEmployee(@Param('id') id: string, @Body() employee: Employee): Promise<Employee>{
      return this.employeeService.updateEmloyee(id, employee)
    }

    @Delete(':id')
    async delete(
      @Param('id') id: string):Promise<Employee>{
        return this.employeeService.deleteEmployee(id);
     }
  
}
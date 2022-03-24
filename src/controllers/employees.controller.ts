import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Employee } from '../schemas/employees.schema';
import { EmployeeService } from '../services/employees.service';
import { createEmployeeDto } from './employees/dto/create.employee.dto';
import { UpdateEmployeeDto } from './employees/dto/update.employee.dto';


@ApiTags('Employess')
@Controller('Employee')

export class EmployeesController {
  constructor(
    private readonly employeeService: EmployeeService,) {}

    @Post()
    async createEmployee(@Body() createEmployeeDto: createEmployeeDto): Promise<Employee>{
      return this.employeeService.registerEmployee(createEmployeeDto)
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
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>{
      return this.employeeService.updateEmloyee(id, updateEmployeeDto)
    }

    @Delete(':id')
    async delete(
      @Param('id') id: string):Promise<Employee>{
        return this.employeeService.deleteEmployee(id);
     }
  
}
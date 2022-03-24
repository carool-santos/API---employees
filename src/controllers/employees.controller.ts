import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from '../schemas/employees.schema';
import { EmployeeService } from '../services/employees.service';
import { createEmployeeDto } from './employees/dto/create.employee.dto';
import { UpdateEmployeeDto } from './employees/dto/update.employee.dto';


@Controller('api/v1/employee')
@ApiTags('Employess')

export class EmployeesController {
  constructor(
    private readonly employeeService: EmployeeService,) {}

    @Post()
    @ApiOperation({ summary: 'Create an employee'})
    @ApiResponse({status: 201, description: 'Employer successfully added'})
    @ApiResponse({status: 404, description: 'You have not created an employee. Please check data'})
    async createEmployee(@Body() createEmployeeDto: createEmployeeDto): Promise<Employee>{
      return this.employeeService.registerEmployee(createEmployeeDto)
    }

    @Get(':id')
    @ApiOperation({ summary: 'View an employers data'})
    async getByIdEmployee(
      @Param('id') id: string) :Promise<Employee>{
        return this.employeeService.getByIdEmployee(id);
    }

    @Get()
    @ApiOperation({ summary: 'View all employee data'})
    async getAllEmployees(): Promise<Employee[]>{
      return this.employeeService.getAllEmployees();
    }

    @Put('id')
    @ApiOperation({ summary: 'Update an employee data'})
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>{
      return this.employeeService.updateEmloyee(id, updateEmployeeDto)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an employee'})
    async delete(
      @Param('id') id: string):Promise<Employee>{
        return this.employeeService.deleteEmployee(id);
     }
  
}
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
    @ApiResponse({status: 400, description: 'You have not created an employee. Please check data'})
    @ApiResponse({status: 404, description: 'Could not create an employee'})
    async createEmployee(@Body() createEmployeeDto: createEmployeeDto): Promise<Employee>{
      return this.employeeService.registerEmployee(createEmployeeDto)
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Show an employees data successfully'})
    @ApiResponse({status: 404, description: 'Employer not found'})
    @ApiOperation({ summary: 'View an employers data'})
    async getByIdEmployee(
      @Param('id') id: string) :Promise<Employee>{
        return this.employeeService.getByIdEmployee(id);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Show all employees data successfully'})
    @ApiResponse({status: 404, description: 'Checks the request'})
    @ApiOperation({ summary: 'View all employee data'})
    async getAllEmployees(): Promise<Employee[]>{
      return this.employeeService.getAllEmployees();
    }

    @Put('id')
    @ApiResponse({status: 200, description: 'Data of an employer successfully updated'})
    @ApiResponse({status: 404, description: 'Employer cannot be found'})
    @ApiOperation({ summary: 'Update an employee data'})
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>{
      return this.employeeService.updateEmloyee(id, updateEmployeeDto)
    }

    @Delete(':id')
    @ApiResponse({status: 204, description: 'Employer successfully removed'})
    @ApiResponse({status: 404, description: 'Employer cannot be found'})
    @ApiOperation({ summary: 'Delete an employee'})
    async delete(
      @Param('id') id: string):Promise<Employee>{
        return this.employeeService.deleteEmployee(id);
     }
  
}
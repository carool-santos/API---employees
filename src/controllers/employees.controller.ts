import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexEmployeeSwagger } from '../swagger/index-employee.swagger';
import { Employee } from '../schemas/employees.schema';
import { EmployeeService } from '../services/employees.service';
import { createEmployeeDto } from './employees/dto/create.employee.dto';
import { UpdateEmployeeDto } from './employees/dto/update.employee.dto';
import { BadRequestSwagger } from '../utils/swagger/bad.request.swagger';
import { NotFoundSwagger } from '../utils/swagger/not.found.swagger';

@Controller('api/v1/employee')
@ApiTags('Employess')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create an employee' })
  @ApiOkResponse({ description: 'Employer successfully added' })
  @ApiResponse({
    status: 400,
    description: 'You have not created an employee. Please check data',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Could not create an employee',
    type: NotFoundSwagger,
  })
  async createEmployee(
    @Body() createEmployeeDto: createEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.registerEmployee(createEmployeeDto);
  }

  @Get(':id')
  @ApiOkResponse({description: 'Show an employees data successfully' })
  @ApiResponse({
    status: 404,
    description: 'Employer not found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'View an employers data' })
  async getByIdEmployee(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.getByIdEmployee(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Show all employees data successfully',  type: IndexEmployeeSwagger, isArray: true })
  @ApiOperation({ summary: 'View all employee data' })
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Put('id')
  @ApiOkResponse({ description: 'Data of an employer successfully updated'})
  @ApiResponse({
    status: 400,
    description: 'Incorrect Data',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Employer cannot be found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'Update an employee data' })
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.updateEmloyee(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
    description: 'Employer successfully removed',
  })
  @ApiResponse({
    status: 404,
    description: 'Employer cannot be found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'Delete an employee' })
  async delete(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.deleteEmployee(id);
  }
}

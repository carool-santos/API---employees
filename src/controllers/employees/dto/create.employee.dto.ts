import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {Document} from 'mongoose'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createEmployeeDto extends Document{

    @ApiProperty({ description: 'Contract Type', example: 'CLT'})
    @IsString({ message: 'It has to be of type string' })
    @IsNotEmpty({ message: 'Contract type required' })
    contract_type = ''


    @ApiProperty({ description: 'Document', example: '53.854.350-X'})
    @IsString({ message: 'It has to be of type string' })
    @IsNotEmpty({ message: 'Document required' })
    document = ''


    @ApiProperty({ description: 'Name', example: 'Luke Skywalker'})
    @IsString({ message: 'It has to be of type string' })
    @IsNotEmpty({ message: 'name required' })
    name = ''


    @ApiProperty({ description: 'Job Title', example: 'Jedi Master'})
    @IsString({ message: 'It has to be of type string' })
    @IsNotEmpty({ message: 'job title required' })
    job_title =''


    @ApiProperty({ description: 'email', example: 'luke.jedi@gmail.com'})
    @IsString({ message: 'It has to be of type string' })
    @IsNotEmpty({ message: 'job title required' })
    email =''

    @ApiProperty({ description: 'telephone', example: 306401850})
    @IsNumber()
    @IsNotEmpty({ message: 'job title required' })
    main_phone=''

    @ApiPropertyOptional({ description: 'telephone 2 optional', example: 33505072})
    @IsNumber()
    second_phone =''


}